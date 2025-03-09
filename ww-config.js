export default {
  editor: {
    label: {
      en: "DK Date Picker",
    },
    icon: "calendar",
    bubble: {
      icon: "calendar",
    },
    customStylePropertiesOrder: ["format"],
    customSettingsPropertiesOrder: ["required", ["selectionTitle", "value"]],
  },
  triggerEvents: [
    {
      name: "onChange",
      label: { en: "On Change" },
      event: { value: "2023-03-02T14:54:54.727Z" },
    },
  ],
  properties: {
    value: {
      label: {
        en: "Value",
      },
      type: "Text",
      defaultValue: null,
      bindable: true,
      section: "settings",
      /* wwEditor:start */
      bindingValidation: {
        type: "string",
        tooltip: 'A string ISO date: `"2021-03-11T10:11:20.000+00:00"`',
      },
      /* wwEditor:end */
    },
    required: {
      label: { en: "Required" },
      type: "OnOff",
      section: "settings",
      bindable: true,
      defaultValue: false,
    },
    format: {
      label: {
        en: "Format",
      },
      type: "TextSelect",
      section: "settings",
      bindable: true,
      options: {
        options: [
          { value: "DD/MM/YYYY", label: { en: "DD/MM/YYYY" } },
          { value: "DD-MMM-YYYY", label: { en: "DD-MMM-YYYY" } },
          { value: "DD-MMM-YY", label: { en: "DD-MMM-YY" } },
        ],
      },
      defaultValue: "DD/MM/YYYY",
    },
  },
};
