import type {Part} from './types';
export const studyLegend=[
 {key:'motor',name:'Motor-associated',color:'#ff5c57'},
 {key:'sensory',name:'Sensory-associated',color:'#479fff'},
 {key:'limbic',name:'Limbic',color:'#42df7b'},
 {key:'mixed',name:'Mixed / association',color:'#efbd43'},
 {key:'white',name:'White matter / connections',color:'#e3eaf4'},
 {key:'vessel',name:'Arteries',color:'#e969e4'},
 {key:'space',name:'CSF spaces / plexus',color:'#8d82ff'},
 {key:'cover',name:'Meninges',color:'#a8aebc'}
] as const;
export function studyCategory(p:Part):typeof studyLegend[number]{
 let key:typeof studyLegend[number]['key']='mixed';
 if(p.group==='Blood supply')key='vessel';else if(p.group==='Ventricles')key='space';else if(p.group==='Meninges')key='cover';else if(p.group==='Limbic system')key='limbic';else if(p.group==='White matter')key='white';else if(p.group==='Basal ganglia'||p.group==='Cerebellum'||/precentral gyrus/i.test(p.name))key='motor';else if(p.group==='Visual pathways'||/postcentral gyrus|occipital lobe|geniculate body/i.test(p.name))key='sensory';
 return studyLegend.find(c=>c.key===key)!;
}
