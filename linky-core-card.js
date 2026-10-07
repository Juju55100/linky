/* Linky Core v1.0.0 — standalone Home Assistant custom card. */
(() => {
'use strict';
const VERSION='1.0.0';
const CSS="/* Linky Core v1.0.0 — isolated styles; embedded in the JavaScript. */\n:host{display:block;--lc-green:#c4f65b;--lc-cyan:#53e9e5;--lc-amber:#ffd38a;--lc-text:#eaf3ee;--lc-muted:#90aba8;font-family:system-ui,-apple-system,\"Segoe UI\",sans-serif;color:var(--lc-text)}\n*{box-sizing:border-box}ha-card{display:block;background:none;border:0;box-shadow:none}\n.shell{container-type:inline-size;position:relative;isolation:isolate;overflow:hidden;padding:26px;border:1px solid #35645d;border-radius:26px;background:radial-gradient(ellipse at 48% 40%,#113a343d,transparent 53%),linear-gradient(135deg,#09191e,#071319 64%,#0c1e21);color:var(--lc-text)}\n.shell::before{content:\"\";position:absolute;inset:0;z-index:-1;pointer-events:none;background-image:linear-gradient(#5ebcab08 1px,transparent 1px),linear-gradient(90deg,#5ebcab08 1px,transparent 1px);background-size:42px 42px;mask-image:linear-gradient(#000,transparent 85%)}\nheader{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:20px}.brand{display:flex;align-items:center;gap:12px}.brand-mark{color:var(--lc-green);font-size:28px;text-shadow:0 0 18px #b9ff6266}.eyebrow{font-size:10px;letter-spacing:2px;color:var(--lc-muted)}h1{margin:2px 0 0;font-size:28px;font-weight:750;letter-spacing:3px}.tariff{border:1px solid #c5f55b55;border-radius:25px;color:var(--lc-green);padding:8px 12px;font-size:11px;font-weight:700;letter-spacing:1px;text-align:center;overflow-wrap:anywhere}.shell[data-tariff=\"hp\"] .tariff{color:var(--lc-amber);border-color:#ffd38a55}\n.main{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.32fr) minmax(0,1fr);gap:12px;align-items:center}.panel{min-width:0;position:relative;z-index:2}.section-title{font-size:10px;letter-spacing:1.5px;color:var(--lc-muted);margin:0 0 16px}.metric{padding:14px 0;border-bottom:1px solid #91c5bc24}.label{display:block;font-size:11px;color:var(--lc-muted);margin-bottom:7px;line-height:1.45}.value{font-size:24px;font-weight:720;font-variant-numeric:tabular-nums;line-height:1.25;overflow-wrap:anywhere}.value small{font-size:12px;font-weight:500;color:var(--lc-muted)}.accent{color:var(--lc-cyan)}.minor{font-size:15px;font-weight:600;overflow-wrap:anywhere}.gauge{height:4px;background:#29453f;border-radius:8px;overflow:hidden;margin:12px 0 5px}.gauge span{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--lc-cyan),var(--lc-green));transition:width .5s}.gauge-note{font-size:10px;color:var(--lc-muted);line-height:1.5}.overload .gauge span{background:#ffad76}\n.reactor{position:relative;min-width:0;min-height:330px;display:flex;align-items:center;justify-content:center;isolation:isolate}.reactor::before{content:\"\";position:absolute;inset:0 -5%;z-index:-1;border-radius:50%;background:radial-gradient(ellipse,#b5ee5b24,transparent 66%);animation:aura 5s ease-in-out infinite}.orbit{position:absolute;width:98%;aspect-ratio:1;border:1px solid #9fdf6540;border-radius:50%;box-shadow:0 0 22px #70ddb20c}.orbit::after{content:\"\";position:absolute;inset:12px;border:1px dashed #63a89c30;border-radius:50%}.meter{width:92%;max-width:232px;z-index:1;filter:drop-shadow(0 10px 12px #0007) drop-shadow(0 0 14px #b9f35622)}.meter svg{display:block;width:100%;height:auto}.meter .led{fill:#b6ca84}.active .meter .led{fill:#ebffa3;animation:led 1.3s ease-in-out infinite}.wire{position:absolute;bottom:10px;left:50%;width:1px;height:55px;background:linear-gradient(#c6f576,transparent);opacity:.4}.wire::after{content:\"\";position:absolute;width:4px;height:4px;left:-1.5px;background:#dfffaa;border-radius:50%;opacity:0}.active .wire::after{animation:pulse 2s linear infinite}.wire.a{transform:translateX(-30px) rotate(15deg)}.wire.b{transform:translateX(30px) rotate(-15deg)}.wire.b::after{animation-delay:-1s}\n.cost{padding:14px 0;border-bottom:1px solid #91c5bc24}.cost .value{color:var(--lc-green);font-size:28px}.breakdown{display:grid;grid-template-columns:1fr;gap:7px;margin-top:13px}.cost-row{display:flex;flex-wrap:wrap;justify-content:space-between;gap:4px;font-size:12px}.cost-row b{font-weight:550;overflow-wrap:anywhere;font-variant-numeric:tabular-nums}.chip{display:inline-flex;align-items:center;gap:6px;color:var(--lc-muted)}.chip::before{content:\"\";display:inline-block;width:5px;height:5px;border-radius:50%;background:var(--lc-cyan)}.chip.hp::before{background:var(--lc-amber)}.note{font-size:10px;color:var(--lc-muted);line-height:1.5;margin:10px 0 0}\n.indexes{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:20px}.index{border:1px solid #5ac4b33a;border-radius:14px;padding:15px 17px;background:#10272b66;min-width:0}.index.hp{border-color:#dcbb6636}.index .value{font-size:22px;margin-top:8px}.index.hp .value{color:var(--lc-amber)}.index.hc .value{color:var(--lc-cyan)}.tariff-meta{display:flex;flex-wrap:wrap;justify-content:space-between;gap:9px 18px;padding:18px 1px 0;font-size:11px;color:var(--lc-muted)}.tariff-meta b{color:var(--lc-text);font-weight:600;overflow-wrap:anywhere}footer{display:flex;justify-content:space-between;gap:12px;border-top:1px solid #91c5bc20;margin-top:18px;padding-top:12px;font-size:9px;letter-spacing:1px;color:#809a97}.health::before{content:\"\";display:inline-block;width:5px;height:5px;border-radius:50%;background:var(--lc-green);margin-right:7px}.partial .health::before{background:var(--lc-amber)}\n@container(max-width:540px){header{margin-bottom:10px}h1{font-size:22px}.tariff{font-size:9px;padding:6px 8px}.main{gap:7px}.reactor{min-height:260px}.section-title{font-size:9px;letter-spacing:.5px}.value{font-size:clamp(16px,4.4cqw,24px)}.cost .value{font-size:clamp(17px,4.5cqw,26px)}.label{font-size:10px}.minor{font-size:12px}.cost-row{font-size:11px}.index{padding:12px 10px}.index .value{font-size:clamp(14px,3.9cqw,22px)}.index .value small{font-size:10px}.meter{width:100%}.tariff-meta{font-size:10px}}\n@media(max-width:450px){.shell{padding:15px;border-radius:20px}}\n@keyframes aura{50%{opacity:.65}}@keyframes led{50%{opacity:.35}}@keyframes pulse{0%{top:0;opacity:0}20%{opacity:1}100%{top:100%;opacity:0}}\n@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important}}\r\n";
const METER="<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 350\" role=\"img\" aria-label=\"Illustration du compteur Linky\">\n<defs>\n <linearGradient id=\"__ID__body\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop stop-color=\"#d5ed83\"/><stop offset=\".4\" stop-color=\"#abc962\"/><stop offset=\"1\" stop-color=\"#6b973f\"/></linearGradient>\n <linearGradient id=\"__ID__top\" x2=\"0\" y2=\"1\"><stop stop-color=\"#e5f3af\"/><stop offset=\"1\" stop-color=\"#9bbc58\"/></linearGradient>\n <linearGradient id=\"__ID__lcd\" x2=\"0\" y2=\"1\"><stop stop-color=\"#091d22\"/><stop offset=\"1\" stop-color=\"#1d3937\"/></linearGradient>\n</defs>\n<path d=\"M46 22 Q120 7 194 22 L207 39 L211 287 Q208 319 191 324 L48 324 Q30 314 29 289 L33 39Z\" fill=\"#263f36\" stroke=\"#b5d48e\" stroke-opacity=\".5\"/>\n<path d=\"M44 19 Q120 5 196 19 L205 42 L203 278 Q202 304 188 309 H52 Q37 304 36 278 L35 42Z\" fill=\"url(#__ID__body)\" stroke=\"#daeea7\" stroke-width=\"1.5\"/>\n<path d=\"M44 19 Q120 5 196 19 L205 42 L35 42Z\" fill=\"url(#__ID__top)\"/>\n<path d=\"M41 231 Q120 218 199 231 L202 278 Q199 303 188 309 H52 Q39 302 38 278Z\" fill=\"#83a64b\" stroke=\"#647e3b\" stroke-width=\"1\"/>\n<path d=\"M47 244 Q120 235 193 244\" stroke=\"#d2e899\" stroke-opacity=\".45\" fill=\"none\"/>\n<text x=\"120\" y=\"66\" fill=\"#334c2c\" font-size=\"23\" font-weight=\"700\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\">Linky</text>\n<circle class=\"led\" cx=\"120\" cy=\"83\" r=\"3\" fill=\"#dbed91\"/>\n<rect x=\"49\" y=\"96\" width=\"142\" height=\"86\" rx=\"9\" fill=\"#516b42\"/>\n<rect x=\"54\" y=\"101\" width=\"132\" height=\"76\" rx=\"5\" fill=\"url(#__ID__lcd)\" stroke=\"#e9fac466\"/>\n<text x=\"120\" y=\"119\" fill=\"#8db2a0\" font-size=\"7\" letter-spacing=\"1\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\">PUISSANCE APPARENTE</text>\n<text data-field=\"meterPower\" x=\"120\" y=\"150\" fill=\"#d9ffae\" font-size=\"27\" font-weight=\"700\" text-anchor=\"middle\" font-family=\"monospace\">—</text>\n<text data-field=\"meterPeriod\" x=\"120\" y=\"165\" fill=\"#a5c7ad\" font-size=\"8\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\">PÉRIODE —</text>\n<circle cx=\"91\" cy=\"204\" r=\"12\" fill=\"#385134\" stroke=\"#dcf09d\" stroke-opacity=\".5\"/><circle cx=\"149\" cy=\"204\" r=\"12\" fill=\"#385134\" stroke=\"#dcf09d\" stroke-opacity=\".5\"/>\n<path d=\"M86 204h10 M144 204h10 M149 199v10\" stroke=\"#ccec8b\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n<rect x=\"82\" y=\"250\" width=\"76\" height=\"23\" rx=\"3\" fill=\"#bfd18b\" fill-opacity=\".55\"/>\n<path d=\"M91 255v12m3-12v12m5-12v12m2-12v12m5-12v12m4-12v12m2-12v12m5-12v12m3-12v12m5-12v12m4-12v12m2-12v12m5-12v12m4-12v12\" stroke=\"#44593b\"/>\n<circle cx=\"120\" cy=\"291\" r=\"6\" fill=\"#587d3a\" stroke=\"#c2da91\"/><path d=\"M117 291h6\" stroke=\"#cfdfa1\"/>\n<path d=\"M48 48v176\" stroke=\"#f0ffd1\" stroke-width=\"2\" stroke-opacity=\".27\"/>\n</svg>\r\n";
const FIELDS=[
 ['apparent_power','Puissance apparente','sensor.linky_puissance_apparente'],
 ['current','Intensité instantanée','sensor.linky_intensite_instantanee'],
 ['subscribed_current','Intensité souscrite','sensor.linky_intensite_souscrite'],
 ['period','Période tarifaire','sensor.linky_periode_tarifaire'],
 ['schedule','Horaire HP/HC','sensor.linky_horaire_hp_hc'],
 ['option','Option tarifaire','sensor.linky_option_tarifaire'],
 ['index_hc','Index heures creuses','sensor.linky_index_hc'],
 ['index_hp','Index heures pleines','sensor.linky_index_hp'],
 ['cost_hc_day','Coût HC journalier','sensor.cout_hc_journalier_linky'],
 ['cost_hp_day','Coût HP journalier','sensor.cout_hp_journalier_linky'],
 ['cost_hc_month','Coût HC mensuel','sensor.cout_hc_mensuel_linky'],
 ['cost_hp_month','Coût HP mensuel','sensor.cout_hp_mensuel_linky']
];
const DEFAULTS=Object.fromEntries(FIELDS.map(([key,,id])=>[key,id]));
const format=(value,digits=0)=>value===null?'—':new Intl.NumberFormat('fr-FR',{minimumFractionDigits:digits,maximumFractionDigits:digits}).format(Object.is(value,-0)?0:value);
let counter=0;
class LinkyCoreCard extends HTMLElement {
 constructor(){super();this.attachShadow({mode:'open'});this._id=`lc${++counter}-`;}
 static getStubConfig(){return {type:'custom:linky-core-card',title:'LINKY CORE',...DEFAULTS};}
 static getConfigElement(){return document.createElement('linky-core-card-editor');}
 setConfig(config){
  if(!config||typeof config!=='object'||Array.isArray(config))throw new Error('Configuration Linky Core invalide');
  this.config={...DEFAULTS,title:'LINKY CORE',...config};
  if(!this._built)this._build();
  this._update();
 }
 set hass(value){this._hass=value;if(this.config)this._update();}
 getCardSize(){return 10;}
 getGridOptions(){return {columns:24,min_columns:12,rows:10,min_rows:8};}
 _state(key){
  const state=this._hass?.states?.[this.config[key]];
  return state&&!['unknown','unavailable','none',''].includes(String(state.state).trim().toLowerCase())?state:null;
 }
 _number(key,kind){
  const state=this._state(key);if(!state)return null;
  const n=Number(state.state);if(!Number.isFinite(n))return null;
  const unit=String(state.attributes?.unit_of_measurement??'').trim();
  const units={power:{VA:1,kVA:1000,'':1},current:{A:1,mA:.001,'':1},energy:{kWh:1,Wh:.001,MWh:1000,'':1},cost:{'€':1,EUR:1,'':1}};
  const factor=units[kind]?.[unit];return factor===undefined?null:n*factor;
 }
 _text(key){return this._state(key)?.state??'—';}
 _set(name,value){const el=this.shadowRoot.querySelector(`[data-field="${name}"]`);if(el)el.textContent=value;}
 _build(){
  this.shadowRoot.innerHTML=`<style>${CSS}</style><ha-card><div class="shell">
   <header><div class="brand"><span class="brand-mark" aria-hidden="true">ϟ</span><div><div class="eyebrow">ÉNERGIE / TÉLÉINFORMATION</div><h1 data-field="title"></h1></div></div><div class="tariff" data-field="tariff">PÉRIODE —</div></header>
   <main class="main">
    <section class="panel"><h2 class="section-title">MESURES INSTANTANÉES</h2>
     <div class="metric"><span class="label">Puissance apparente</span><div class="value accent"><span data-field="power">—</span> <small>VA</small></div></div>
     <div class="metric"><span class="label">Intensité instantanée</span><div class="value"><span data-field="current">—</span> <small>A</small></div><div class="gauge" role="meter" aria-label="Part de l’intensité souscrite" aria-valuemin="0" aria-valuemax="100"><span></span></div><div class="gauge-note" data-field="load">—</div></div>
     <div class="metric"><span class="label">Intensité souscrite</span><div class="minor"><span data-field="subscribed">—</span> A</div></div>
    </section>
    <section class="reactor" aria-label="Compteur Linky"><div class="orbit" aria-hidden="true"></div><div class="meter">${METER.replaceAll('__ID__',this._id)}</div><div class="wire a" aria-hidden="true"></div><div class="wire b" aria-hidden="true"></div></section>
    <section class="panel"><h2 class="section-title">COÛTS ÉNERGIE</h2>
     <div class="cost"><span class="label">Aujourd’hui · HP + HC</span><div class="value" data-field="day">—</div><div class="breakdown"><div class="cost-row"><span class="chip">HC</span><b data-field="cost_hc_day">—</b></div><div class="cost-row"><span class="chip hp">HP</span><b data-field="cost_hp_day">—</b></div></div></div>
     <div class="cost"><span class="label">Ce mois · HP + HC</span><div class="value" data-field="month">—</div><div class="breakdown"><div class="cost-row"><span class="chip">HC</span><b data-field="cost_hc_month">—</b></div><div class="cost-row"><span class="chip hp">HP</span><b data-field="cost_hp_month">—</b></div></div></div>
     <p class="note">Somme des capteurs HP et HC.</p>
    </section>
   </main>
   <section class="indexes"><div class="index hc"><span class="chip">INDEX HEURES CREUSES</span><div class="value"><span data-field="index_hc">—</span> <small>kWh</small></div></div><div class="index hp"><span class="chip hp">INDEX HEURES PLEINES</span><div class="value"><span data-field="index_hp">—</span> <small>kWh</small></div></div></section>
   <section class="tariff-meta"><span>Horaire HP/HC <b data-field="schedule">—</b></span><span>Période <b data-field="period">—</b></span><span>Option <b data-field="option">—</b></span></section>
   <footer><span class="health" data-field="health">En attente des mesures</span><span>LINKY CORE / ${VERSION}</span></footer>
  </div></ha-card>`;
  this._built=true;
 }
 _update(){
  if(!this._built)return;
  const p=this._number('apparent_power','power'),current=this._number('current','current'),sub=this._number('subscribed_current','current');
  this._set('title',this.config.title||'LINKY CORE');this._set('power',format(p));this._set('current',format(current,1));this._set('subscribed',format(sub));
  this._set('meterPower',p===null?'—':`${format(p)} VA`);
  const meterPower=this.shadowRoot.querySelector('[data-field="meterPower"]');
  meterPower.setAttribute('font-size',p!==null&&Math.abs(p)>=10000?'18':'24');
  const period=String(this._text('period')).trim();
  const mode=/^HC(?:\b|[. _-]|$)/i.test(period)?'hc':/^HP(?:\b|[. _-]|$)/i.test(period)?'hp':'other';
  this._set('tariff',mode==='hc'?'HEURES CREUSES':mode==='hp'?'HEURES PLEINES':`PÉRIODE ${period}`);
  this._set('meterPeriod',mode==='hc'?'HEURES CREUSES':mode==='hp'?'HEURES PLEINES':'TÉLÉINFORMATION');
  const shell=this.shadowRoot.querySelector('.shell');shell.dataset.tariff=mode;shell.classList.toggle('active',p!==null&&p>0);
  for(const key of ['schedule','period','option'])this._set(key,this._text(key));
  let valid=[p,current,sub].filter(v=>v!==null).length;
  for(const key of ['schedule','period','option'])if(this._state(key))valid++;
  for(const key of ['index_hc','index_hp']){const n=this._number(key,'energy');this._set(key,format(n,3));if(n!==null)valid++;}
  const money=n=>n===null?'—':`${format(n,2)} €`;
  const costs={};for(const key of ['cost_hc_day','cost_hp_day','cost_hc_month','cost_hp_month']){costs[key]=this._number(key,'cost');this._set(key,money(costs[key]));if(costs[key]!==null)valid++;}
  for(const period of ['day','month']){const a=costs[`cost_hc_${period}`],b=costs[`cost_hp_${period}`];this._set(period,money(a!==null&&b!==null?a+b:null));}
  const load=current!==null&&sub!==null&&sub>0?Math.max(0,current/sub*100):null;
  const gauge=this.shadowRoot.querySelector('.gauge');gauge.querySelector('span').style.width=`${load===null?0:Math.min(100,load)}%`;
  if(load===null){gauge.removeAttribute('aria-valuenow');gauge.setAttribute('aria-valuetext','Indisponible');}else{gauge.setAttribute('aria-valuenow',String(Math.min(100,load)));gauge.setAttribute('aria-valuetext',`${format(load)} % de l’intensité souscrite`);}
  this._set('load',load===null?'Charge non disponible':`${format(load)} % de l’intensité souscrite`);shell.classList.toggle('overload',load!==null&&load>100);
  shell.classList.toggle('partial',valid<12);this._set('health',valid===12?'Mesures reçues':valid===0?'En attente des mesures':'Données partielles');
 }
}
class LinkyCoreEditor extends HTMLElement {
 constructor(){super();this.attachShadow({mode:'open'});}
 setConfig(config){this._config={...DEFAULTS,title:'LINKY CORE',...config};this._render();}
 set hass(hass){this._hass=hass;this.shadowRoot.querySelectorAll('ha-entity-picker').forEach(el=>el.hass=hass);}
 _change(key,value){this._config={...this._config,[key]:value};this.dispatchEvent(new CustomEvent('config-changed',{detail:{config:{...this._config}},bubbles:true,composed:true}));}
 _render(){
  this.shadowRoot.innerHTML=`<style>:host{display:block}.fields{display:grid;gap:16px;padding:12px 0}label{display:grid;gap:6px;font-size:14px}input{box-sizing:border-box;width:100%;padding:10px;font:inherit;color:var(--primary-text-color);background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:6px}small{color:var(--secondary-text-color);line-height:1.5}ha-entity-picker{display:block;width:100%}</style><div class="fields"><label>Titre<input id="title"></label><small>Les coûts totaux additionnent uniquement les capteurs HP et HC. Les index sont des compteurs cumulés, pas la consommation du jour.</small>${FIELDS.map(([key,label])=>`<label>${label}<ha-entity-picker id="${key}" allow-custom-entity></ha-entity-picker></label>`).join('')}</div>`;
  const title=this.shadowRoot.querySelector('#title');title.value=this._config.title;title.addEventListener('change',e=>this._change('title',e.target.value));
  FIELDS.forEach(([key])=>{const el=this.shadowRoot.querySelector('#'+key);el.hass=this._hass;el.value=this._config[key]||'';el.includeDomains=['sensor'];el.addEventListener('value-changed',e=>{if(e.detail?.value!==undefined)this._change(key,e.detail.value);});});
 }
}
if(!customElements.get('linky-core-card'))customElements.define('linky-core-card',LinkyCoreCard);
if(!customElements.get('linky-core-card-editor'))customElements.define('linky-core-card-editor',LinkyCoreEditor);
window.customCards=window.customCards||[];
if(!window.customCards.some(c=>c.type==='linky-core-card'))window.customCards.push({type:'linky-core-card',name:'Linky Core',description:'Compteur Linky illustré, index HP/HC et coûts énergie.',preview:true});
})();
