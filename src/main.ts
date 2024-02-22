import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';

import Button from "primevue/button"
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputNumber from 'primevue/inputnumber';
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';   
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeflex/primeflex.css'

import "echarts";


const app = createApp(App);

app.use(PrimeVue);

app.component('Button', Button);
app.component('InputGroup', InputGroup);
app.component('InputGroupAddon', InputGroupAddon);
app.component('InputNumber', InputNumber);
app.component('InputSwitch', InputSwitch);
app.component('InputText', InputText);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);

app.mount('#app')

