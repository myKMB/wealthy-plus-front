<script setup lang="ts">
import { Ref, ref, PropType } from 'vue';
import { FutureWealthService } from '../services/FutureWealthService';
import FutureWealthChart from './FutureWealthChart.vue'

const props = defineProps({
  options: { type: Object as PropType<FutureWealthOptions>, required: true }
})

const fw = new FutureWealthService();
fw.setUrl('https://localhost:7228');
const res: Ref<FutureWealthResults | null> = ref(null);

const fetchData = async () => {
  try {
    const result = await fw.getFutureWealth(props.options);
    res.value = result;
    console.log(result)
  } catch (error) {
    console.error('Error fetching future wealth:', error);
  }
};

let cptYear = 0;

fetchData();

const printPDF = () => {
  alert("Not implemented")
}

</script>

<template>
    Résultat au bout de {{ props.options.years }} années : 
    {{ res?.finalBrutCapital }}
    
    <div class="card">
        <TabView>
            <TabPanel header="Graphique">
              <FutureWealthChart :value="res?.details" />
            </TabPanel>
            <TabPanel header="Tableau">
              <DataTable :value="res?.details" tableStyle="min-width: 50rem">
                <Column field="" header="Année"></Column>
                <Column field="investmentAnnual" header="Investissement annuel"></Column>
                <Column field="investmentTotal" header="Investissement total"></Column>
                <Column field="interestsAnnual" header="Intérêts de l'année"></Column>
                <Column field="interestsTotal" header="Intérêts totaux"></Column>
                <Column field="valueTotal" header="Capital total"></Column>
              </DataTable>
            </TabPanel>
        </TabView>

        <Button label="Imprimer" @click="printPDF"/>
    </div>
</template>
