<script setup lang="ts">
    import {SearchIn} from '../lib/SearchIn'
    import { computed, ref } from 'vue';
    import { formGET } from '../lib/formGET';
    interface Props {
        schema: InputSelect
    }

    const props = defineProps<Props>();

    const inputSearch = ref<string>();
    const outputSearch = computed(() => {
        if(props.schema.search && inputSearch.value?.length){
            const result = SearchIn(inputSearch.value, props.schema.options)
            const sel = formGET.inputSelect(props.schema.label)
            if(sel){
                if(result?.length){
                    sel.messageError = ''
                    sel.data = result[0].value
                    return result
                } else {
                    sel.data = undefined;
                    sel.messageError = 'Not found'
                    return []
                }
            }            

            
        } else {
            return props.schema.options
        }
    })

</script>

<template>

    <div v-if="!props.schema.hide" class="form_component_container">
        <div class="form_component">
            <span style="color: red;">{{ props.schema.messageError }}</span>
            <label for="">{{ props.schema.label }}<span v-if="props.schema.required" style="color:gray;">*</span></label>
            <input v-if="props.schema.search" v-model="inputSearch" placeholder="Search..." />
            <select v-model="props.schema.data" :multiple="props.schema.multiple" @change="props.schema.onChange">
                <option v-for="o in outputSearch" :value="o.value">{{ o.label }}</option>
            </select>
            <span class="form_help" style="color: gray;">{{ props.schema.help }}</span>
        </div> 
    </div>   

</template>

<style scoped>

    .form_component{
        display: flex;
        flex-direction: column;
        border: solid 1px rgb(221, 221, 221);
        border-radius: 5px;
        padding: 2vw;
        min-height: 15vh;
        justify-content: center;
    }

    label{
        font-size: 1.8vw;
        color: rgb(40, 51, 65);
    }

    select{
        font-size: 20px;
        min-height: 30px;
    }    

</style>
