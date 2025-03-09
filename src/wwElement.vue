<template>
    <div>
        <VueDatePicker
            :model-value="variableValue"
            @update:model-value="handleSelection"
            :month-change-on-scroll="inverse"
            :month-change-on-arrows="false"
            :arrow-navigation="true"
            :enable-time-picker="false"
            :auto-apply="true"
            week-start="0"
        >
        </VueDatePicker>
    </div>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import '@vuepic/vue-datepicker/dist/main.css';

export default {
    components: {
        VueDatePicker,
    },
    props: {
        content: { type: Object, required: true },
        uid: { type: String, required: true },
        /* wwEditor:start */
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
        wwElementState: { type: Object, required: true },
    },
    setup(props) {
        const value = props.content.value;
        const { value: variableValue, setValue } = wwLib.wwVariable.useComponentVariable({
            uid: props.uid,
            name: "value",
            defaultValue: value,
        });

        return {
            variableValue,
            setValue,
            value
        };
    },
    watch: {
        value(newValue, oldValue) {
            if (JSON.stringify(newValue) === JSON.stringify(oldValue)) return;
            this.setValue(newValue);
        }
    },
    methods: {
        handleSelection(value) {
            if (JSON.stringify(this.variableValue) === JSON.stringify(value)) return;
            this.setValue(value);
            this.$emit("trigger-event", {
                name: "onChange",
                event: { value: value },
            });
        }
    }
};
</script>

<style>
    .dp__theme_dark {
        --dp-border-color: #17B3C1 !important;
        --dp-border-color-hover: #17B3C1 !important;
        --dp-border-color-focus: #17B3C1 !important;
    }

    .dp__theme_light {
        --dp-border-color: #17B3C1 !important;
        --dp-border-color-hover: #17B3C1 !important;
        --dp-border-color-focus: #17B3C1 !important;
    }

    :root {
        --dp-border-radius: 8px !important;
    }
</style>
