<template>

    <v-card>
        <v-card-title v-text="loadedLabel"></v-card-title>
        <v-card-text>
            <v-row>
                <v-col 
                    v-for="(item, index) in loadedItems" 
                    :key="index"
                    :cols="12"
                    :md="item.cols"
                >
                    <v-checkbox
                        v-model="selectedItems"
                        multiple
                        :label="item.label"
                        :value="item.value"
                        :color="item.color"
                    ></v-checkbox>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>

</template>

<script>

    export default {
        name: "LvefCheckboxGroup",
        props: {
            cols: {
                Type: String,
                default: "6"
            },
            label: {
                type: String,
                default: ""
            },
            offset: {
                Type: String,
                default: ""
            },
            items: {
                Type: Array,
                 default: () => []
            },
            value: {
                 default: () => []
            }
        },
        data: () => ({
            selectedItems: []
        }),
        created(){
            this.selectedItems = this.value;
        },
        watch:{
            selectedItems:{
                handler: function(val) {
                    this.$emit("field_update", val);
                },
                deep: true
            }
        },
        computed: {
            loadedItems: function(){
                return this.items;
            },
            loadedLabel: function(){
                return this.label;
            },
        }
    }
</script>