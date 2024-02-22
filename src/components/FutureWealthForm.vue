<script setup lang="ts">
import { Ref, ref } from 'vue';
import FutureWealthResults from './FutureWealthResults.vue';

  const resultsVisible = ref(false);

  const options: Ref<FutureWealthOptions> = ref({
        actualWealth: 0,
        annualInvest: 0,
        years: 0,
        repartitionWealthAB: 0,
        repartitionInvestAB: 0,
        averageYieldA: 0,
        averageYieldB: 0,
        taxationA: 0,
        taxationB: 0,
        withdrawalRate: 0,
        inflationRate: 0,
  });

  const initial = ref(0);
  const annual = ref(0);
  const years = ref(0);
  const rate = ref(0);
  const keyCalc = ref(0);

  const calculateInterest = () => {
    options.value = {
        actualWealth: initial.value,
        annualInvest: annual.value,
        years: years.value,
        repartitionWealthAB: 1,
        repartitionInvestAB: 1,
        averageYieldA: rate.value/100,
        averageYieldB: 0.05,
        taxationA: 0.3,
        taxationB: 0,
        withdrawalRate: 0,
        inflationRate: 0.05,
    }

    keyCalc.value++;
    resultsVisible.value = true;
  }
</script>

<template>
   <h1>Calculatrice d'intérêts composés</h1>
    <div class="flex flex-wrap align-items-center justify-content-center">
        <InputGroup>
          <label for="inputInitial">Username</label>
          <InputNumber id="inputInitial" v-model="initial" />
          <small id="inputInitial-help">Enter your username to reset your password.</small> 
        </InputGroup>

        <InputGroup>
            <label for="inputAnnual">Username</label>
            <InputNumber id="inputAnnual" v-model="annual" />
            <small id="inputAnnual-help">Enter your username to reset your password.</small> 
        </InputGroup>

        <InputGroup>
            <label for="inputRate">Username</label>
            <InputNumber id="inputRate" v-model="rate" />
            <small id="inputRate-help">Enter your username to reset your password.</small> 
        </InputGroup>

        <InputGroup>
            <label for="inputYears">Username</label>
            <InputNumber id="inputYears" v-model="years" />
            <small id="inputYears-help">Enter your username to reset your password.</small> 
        </InputGroup>

        <Button label="Calculer" @click="calculateInterest"/>
    </div>

  <h2>Résultats</h2>
    <FutureWealthResults v-if="resultsVisible" :options="options" :key="keyCalc"/>
  <hr />
</template>
