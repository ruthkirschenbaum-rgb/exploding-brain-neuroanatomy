import * as T from 'three';
import type {Part,SceneState} from './types';
export const willis=['FJ1654','FJ1654M','FJ1655','FJ1713','FJ1713M','FJ1682','FJ1682M','FJ1723','FJ1723M','FJ1714','FJ1714M','FJ1692','FJ1692M','FJ1725','FJ1725M','FJ1672','FJ1844'];
export function inRegion(p:Part,r:string){return r==='all'?p.group!=='Spinal cord':r==='medulla'?/Medulla oblongata/i.test(p.name):r==='pons'?/^Pons$/i.test(p.name):r==='cerebellum'?p.group==='Cerebellum':p.group==='Brainstem'}
export function isShown(p:Part,s:SceneState){return (s.isolate?p.id===s.selected:s.visible.includes(p.group))&&(!s.brainOnly||p.group!=='Spinal cord')&&(s.preset!=='willis'||willis.includes(p.id))&&(s.plane==='none'||inRegion(p,s.region))}
export const planeAxis=(plane:string)=>plane==='sagittal'?0:plane==='horizontal'?1:2;
/** True mesh/plane intersections. Closed contours triangulated with nested holes. */
export function sectionGeometry(g:T.BufferGeometry,axis:number,value:number){
 const pos=g.getAttribute('position'),ind=g.index,edges:{a:T.Vector3,b:T.Vector3,used:boolean}[]=[];const n=ind?ind.count:pos.count;
 const key=(p:T.Vector3)=>p.toArray().map(x=>Math.round(x*1e6)).join(',');
 for(let j=0;j<n;j+=3){const v=[0,1,2].map(k=>new T.Vector3().fromBufferAttribute(pos,ind?ind.getX(j+k):j+k));const hits:T.Vector3[]=[];for(let k=0;k<3;k++){const a=v[k],b=v[(k+1)%3],da=a.getComponent(axis)-value,db=b.getComponent(axis)-value;if((da<=0&&db>0)||(db<=0&&da>0))hits.push(a.clone().lerp(b,da/(da-db)))}if(hits.length===2&&key(hits[0])!==key(hits[1]))edges.push({a:hits[0],b:hits[1],used:false})}
 const adj=new Map<string,number[]>();edges.forEach((e,i)=>[e.a,e.b].forEach(p=>{const k=key(p);adj.set(k,[...(adj.get(k)||[]),i])}));const axes=[0,1,2].filter(x=>x!==axis);const loops:T.Vector2[][]=[];
 edges.forEach(e=>{if(e.used)return;e.used=true;const start=key(e.a);let end=key(e.b);const points=[e.a,e.b];let guard=0;while(end!==start&&guard++<edges.length){const next=(adj.get(end)||[]).find(i=>!edges[i].used);if(next===undefined)break;const q=edges[next];q.used=true;const p=key(q.a)===end?q.b:q.a;points.push(p);end=key(p)}if(end===start&&points.length>3)loops.push(points.slice(0,-1).map(p=>new T.Vector2(p.getComponent(axes[0]),p.getComponent(axes[1]))))});
 const inside=(p:T.Vector2,poly:T.Vector2[])=>{let yes=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const a=poly[i],b=poly[j];if((a.y>p.y)!==(b.y>p.y)&&p.x<(b.x-a.x)*(p.y-a.y)/(b.y-a.y)+a.x)yes=!yes}return yes};
 const depth=loops.map((l,i)=>loops.filter((q,j)=>j!==i&&inside(l[0],q)).length),out:number[]=[];
 loops.forEach((outer,i)=>{if(depth[i]%2)return;const holes=loops.filter((h,j)=>depth[j]===depth[i]+1&&inside(h[0],outer));const points=[...outer,...holes.flat()];const faces=T.ShapeUtils.triangulateShape(outer,holes);faces.forEach(f=>f.forEach(k=>{const p=new T.Vector3();p.setComponent(axis,value);p.setComponent(axes[0],points[k].x);p.setComponent(axes[1],points[k].y);out.push(...p.toArray())}))});
 const result=new T.BufferGeometry();result.setAttribute('position',new T.Float32BufferAttribute(out,3));result.computeVertexNormals();result.computeBoundingSphere();return result;
}
