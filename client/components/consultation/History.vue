<script setup lang="ts">
import { ConsultationUpdate } from '~/client/types/consultation/consultation';

defineProps<{
  history: ConsultationUpdate[]
}>()

</script>

<template>
  <div class="history">
    <div class="history-item" v-for="update in history">
      <div class="step"></div>
      <VIcon
        name="ri-calendar-2-line"
        class="icon"
      />
      <div class="content">{{update.title }}</div>
    </div>
  </div>
</template>
<style>
@media screen and ( min-width: 64em){
  .history{
    display: flex;
    flex-direction: row;

    .history-item{
      position: relative;
      width: 80%;
      justify-content: space-around;
      
      .icon{
        display: block;
        position: relative;
        left: 3em;
        background-color: white;
        border-radius: 50%;
        border: 3px solid blue;
        width: 2.5em;
        height: 2.5em;
        padding: 10px;
      }

      /*.step::before {
        display: block;
        position: relative;
        left: 4em;
        content: '';
        border: 3px #9af solid;
        padding-top: 0.4em;
        width: 2.5em;
        height: 2.5em;
        border-radius: 50%;
        background: #eee;
        z-index: 1;
      }*/

      &:not(:last-child) .step::after {
        display: block;
        content: "";
        position: absolute;
        background: #9af;
        top: 15%;
        left: 6em;
        height: 3px;
        width: 96%;
        z-index: -1;
      }

      .content{
        padding: 10px;
        max-width: 70%;
        margin-top: 1em;
        background-color: var(--background-open-blue-france-hover);
        color: var(--text-action-high-grey);
      }

    }

  }

}

@media screen and ( max-width: 64em) {
  .history{
    display: flex;
    flex-direction: column;
    
    .history-item{
      position: relative;
      min-height: 10em;

      /*//.step::before {
      //  display: block;
      //  position: relative;
      //  top: 2.5em;
      //  content: '';
      //  border: 3px #9af solid;
      //  padding-top: 0.4em;
      //  width: 2.5em;
      //  height: 2.5em;
      //  border-radius: 50%;
      //  background: #eee;
      //  z-index: 1;
      //}*/

      .icon{
        display: block;
        position: relative;
        top: 2.5em;
        background-color: white;
        border-radius: 100px;
        border: 3px solid blue;
        width: 2.5em;
        height: 2.5em;
        padding: 10px;
      }

      &:not(:last-child) .step::after {
        display: block;
        content: "";
        position: absolute;
        background: #9af;
        top: 50%;
        left: 1.4em;
        width: 3px;
        height: 96%;
        z-index: -1;
      }

      .content{
        padding: 10px;
        max-height: 70%;
        margin-left: 5em;
        box-shadow: blue 1px 1px 5px 5px;
      }

    }
  }
}
</style>