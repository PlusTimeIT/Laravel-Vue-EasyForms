const __resolved__virtual_storySource_vuetify = `
  <script setup lang="ts">
  // default imports
  import '@histoire/app/dist/style.css'
  import 'virtual:$histoire-theme.css'
  import './style.css'
  import { ref, markRaw, computed, reactive } from 'vue'

  // loaded imports
  

  // default variables
  const config = markRaw({
  "blueprint": {
    "defaults": {
      "VAppBar": {
        "flat": true
      },
      "VAutocomplete": {
        "variant": "filled"
      },
      "VBanner": {
        "color": "primary"
      },
      "VBottomSheet": {
        "contentClass": "rounded-t-xl overflow-hidden"
      },
      "VBtn": {
        "color": "primary",
        "rounded": "xl"
      },
      "VBtnGroup": {
        "rounded": "xl",
        "VBtn": {
          "rounded": null
        }
      },
      "VCard": {
        "rounded": "lg"
      },
      "VCheckbox": {
        "color": "secondary",
        "inset": true
      },
      "VChip": {
        "rounded": "sm"
      },
      "VCombobox": {
        "variant": "filled"
      },
      "VNavigationDrawer": {},
      "VSelect": {
        "variant": "filled"
      },
      "VSlider": {
        "color": "primary"
      },
      "VTabs": {
        "color": "primary"
      },
      "VTextarea": {
        "variant": "filled"
      },
      "VTextField": {
        "variant": "filled"
      },
      "VToolbar": {
        "VBtn": {
          "color": null
        }
      }
    },
    "icons": {
      "defaultSet": "mdi",
      "sets": {
        "mdi": {}
      }
    },
    "theme": {
      "themes": {
        "light": {
          "colors": {
            "primary": "#6750a4",
            "secondary": "#b4b0bb",
            "tertiary": "#7d5260",
            "error": "#b3261e",
            "surface": "#fffbfe"
          }
        }
      }
    }
  },
  "theme": {
    "defaultTheme": "vuetifyTheme",
    "themes": {
      "vuetifyTheme": {
        "dark": false,
        "colors": {
          "background": "#FFFFFF",
          "surface": "#FFFFFF",
          "primary": "#000000",
          "primary-darken-1": "#3700B3",
          "secondary": "#03DAC6",
          "secondary-darken-1": "#018786",
          "error": "#B00020",
          "info": "#2196F3",
          "success": "#4CAF50",
          "warning": "#FB8C00"
        }
      }
    }
  }
})
  
  const state = reactive({
    sample: 'This is some sample text.',
    materialColors: 'red',
typography: 'text-h1',
borderRadius: 'rounded-0',
content: 'rounded-0',
elevation: 'elevation-1',
display: 'd-inline-block',
float: 'float-left',
overflow: 'overflow-auto',
overflowSample: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facilis dicta esse molestias vero hic laudantium provident nisi eos quasi iusto alias sequi, aut aliquid voluptatibus commodi! Minima, eum voluptates?',
sizing: 'h-auto',
padding: 'a',
paddingSize: 6,
margin: 'a',
marginSize: 2
  })

  // loaded variables
  
      const MaterialColorsData = markRaw([{"name":"primary","darken":1,"lighten":0,"accent":0},{"name":"secondary","darken":1,"lighten":0,"accent":0},{"name":"success","darken":0,"lighten":0,"accent":0},{"name":"error","darken":0,"lighten":0,"accent":0},{"name":"warning","darken":0,"lighten":0,"accent":0},{"name":"info","darken":0,"lighten":0,"accent":0},{"name":"red","darken":4,"lighten":5,"accent":4},{"name":"pink","darken":4,"lighten":5,"accent":4},{"name":"purple","darken":4,"lighten":5,"accent":4},{"name":"deep-purple","darken":4,"lighten":5,"accent":4},{"name":"indigo","darken":4,"lighten":5,"accent":4},{"name":"blue","darken":4,"lighten":5,"accent":4},{"name":"light-blue","darken":4,"lighten":5,"accent":4},{"name":"cyan","darken":4,"lighten":5,"accent":4},{"name":"teal","darken":4,"lighten":5,"accent":4},{"name":"green","darken":4,"lighten":5,"accent":4},{"name":"light-green","darken":4,"lighten":5,"accent":4},{"name":"lime","darken":4,"lighten":5,"accent":4},{"name":"yellow","darken":4,"lighten":5,"accent":4},{"name":"amber","darken":4,"lighten":5,"accent":4},{"name":"orange","darken":4,"lighten":5,"accent":4},{"name":"deep-orange","darken":4,"lighten":5,"accent":4},{"name":"brown","darken":4,"lighten":5,"accent":0},{"name":"blue-grey","darken":4,"lighten":5,"accent":0},{"name":"grey","darken":4,"lighten":5,"accent":0}])
      

      const TypographyData = markRaw([{"title":"Heading 1","classes":"text-h1"},{"title":"Heading 2","classes":"text-h2"},{"title":"Heading 3","classes":"text-h3"},{"title":"Heading 4","classes":"text-h4"},{"title":"Heading 5","classes":"text-h5"},{"title":"Heading 6","classes":"text-h6"},{"title":"Subtitle 1","classes":"text-subtitle-1"},{"title":"Subtitle 2","classes":"text-subtitle-2"},{"title":"Body 1","classes":"text-body-1"},{"title":"Body 2","classes":"text-body-2"},{"title":"Button","classes":"text-button"},{"title":"Caption","classes":"text-caption"},{"title":"Overline","classes":"text-overline"},{"title":"Font Weight Black","classes":"font-weight-black"},{"title":"Font Weight Bold","classes":"font-weight-bold"},{"title":"Font Weight Medium","classes":"font-weight-medium"},{"title":"Font Weight Regular","classes":"font-weight-regular"},{"title":"Font Weight Light","classes":"font-weight-light"},{"title":"Font Weight Thin","classes":"font-weight-thin"},{"title":"Font Italic","classes":"font-italic"},{"title":"Text Left","classes":"text-left"},{"title":"Text Right","classes":"text-right"},{"title":"Text Center","classes":"text-center"},{"title":"Text Justify","classes":"text-justify"},{"title":"Text Start","classes":"text-start"},{"title":"Text End","classes":"text-end"},{"title":"Text Decoration None","classes":"text-decoration-none"},{"title":"Text Decoration Line Through","classes":"text-decoration-line-through"},{"title":"Text Decoration Overline","classes":"text-decoration-overline"},{"title":"Text Decoration Underline","classes":"text-decoration-underline"},{"title":"Text High Emphasis","classes":"text-high-emphasis"},{"title":"Text Medium Emphasis","classes":"text-medium-emphasis"},{"title":"Text Disabled","classes":"text-disabled"},{"title":"Text Lowercase","classes":"text-lowercase"},{"title":"Text Uppercase","classes":"text-uppercase"},{"title":"Text Capitalize","classes":"text-capitalize"},{"title":"Text No Wrap","classes":"text-no-wrap"},{"title":"Text Truncate","classes":"text-truncate"}])
      

      const BorderRadiusData = markRaw([{"title":"Rounded 0","classes":"rounded-0"},{"title":"Rounded SM","classes":"rounded-sm"},{"title":"Rounded","classes":"rounded"},{"title":"Rounded LG","classes":"rounded-lg"},{"title":"Rounded XL","classes":"rounded-xl"},{"title":"Rounded Pill","classes":"rounded-pill"},{"title":"Rounded Circle","classes":"rounded-circle"},{"title":"Rounded Shaped","classes":"rounded-shaped"}])
      

      const ContentData = markRaw([{"title":"Block Quote","component":"blockquote","classes":"","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{"title":"Paragraph","component":"p","classes":"","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at."},{"title":"Code","component":"code","classes":"","content":"<div>This is a code example.</div>"},{"title":"Variable","component":"var","classes":"","content":"v"}])
      

      const ElevationData = markRaw([{"title":"Elevation 0","classes":"elevation-0"},{"title":"Elevation 1","classes":"elevation-1"},{"title":"Elevation 2","classes":"elevation-2"},{"title":"Elevation 3","classes":"elevation-3"},{"title":"Elevation 4","classes":"elevation-4"},{"title":"Elevation 5","classes":"elevation-5"},{"title":"Elevation 6","classes":"elevation-6"},{"title":"Elevation 7","classes":"elevation-7"},{"title":"Elevation 8","classes":"elevation-8"},{"title":"Elevation 9","classes":"elevation-9"},{"title":"Elevation 10","classes":"elevation-10"},{"title":"Elevation 11","classes":"elevation-11"},{"title":"Elevation 12","classes":"elevation-12"},{"title":"Elevation 13","classes":"elevation-13"},{"title":"Elevation 14","classes":"elevation-14"},{"title":"Elevation 15","classes":"elevation-15"},{"title":"Elevation 16","classes":"elevation-16"},{"title":"Elevation 17","classes":"elevation-17"},{"title":"Elevation 18","classes":"elevation-18"},{"title":"Elevation 19","classes":"elevation-19"},{"title":"Elevation 20","classes":"elevation-20"},{"title":"Elevation 21","classes":"elevation-21"},{"title":"Elevation 22","classes":"elevation-22"},{"title":"Elevation 23","classes":"elevation-23"},{"title":"Elevation 24","classes":"elevation-24"}])
      

      const DisplayData = markRaw([{"title":"Display Inline Block","classes":"d-inline-block","duplicate":3},{"title":"Display Inline","classes":"d-inline"},{"title":"Display Block","classes":"d-block"},{"title":"Display Block Breakpoint SM","classes":"d-block d-sm-inline-block"},{"title":"Display Block Breakpoint MD","classes":"d-block d-md-inline-block"},{"title":"Display Block Breakpoint LG","classes":"d-block d-lg-inline-block"},{"title":"Display Block Breakpoint XL","classes":"d-block d-xl-inline-block"},{"title":"Display Block Breakpoint XXL","classes":"d-block d-xxl-inline-block"},{"title":"Hidden On All","classes":"d-none"},{"title":"Hidden Only On XS","classes":"d-none d-sm-block"},{"title":"Hidden Only On SM","classes":"d-none d-md-block"},{"title":"Hidden Only On MD","classes":"d-none d-lg-block"},{"title":"Hidden Only On LG","classes":"d-none d-xl-block"},{"title":"Hidden Only On XL","classes":"d-none d-xxl-block"},{"title":"Hidden Only On XXL","classes":"d-none"},{"title":"Visible On All","classes":"d-block"},{"title":"Visible Only On XS","classes":"d-block d-sm-none"},{"title":"Visible Only On SM","classes":"d-none d-sm-block d-md-none"},{"title":"Visible Only On MD","classes":"d-none d-md-block d-lg-none"},{"title":"Visible Only On LG","classes":"d-none d-lg-block d-xl-none"},{"title":"Visible Only On XL","classes":"d-none d-xl-block d-xxl-none"},{"title":"Visible Only On XXL","classes":"d-none d-xxl-block"}])
      

      const FloatData = markRaw([{"title":"Float Left","classes":"float-left"},{"title":"Float Right","classes":"float-right"},{"title":"Float Start","classes":"float-start"},{"title":"Float End","classes":"float-end"},{"title":"Float None","classes":"float-none"},{"title":"Float SM Left","classes":"float-sm-left"},{"title":"Float SM Right","classes":"float-sm-right"},{"title":"Float SM Start","classes":"float-sm-start"},{"title":"Float SM End","classes":"float-sm-end"},{"title":"Float SM None","classes":"float-sm-none"},{"title":"Float MD Left","classes":"float-md-left"},{"title":"Float MD Right","classes":"float-md-right"},{"title":"Float MD Start","classes":"float-md-start"},{"title":"Float MD End","classes":"float-md-end"},{"title":"Float MD None","classes":"float-md-none"},{"title":"Float LG Left","classes":"float-lg-left"},{"title":"Float LG Right","classes":"float-lg-right"},{"title":"Float LG Start","classes":"float-lg-start"},{"title":"Float LG End","classes":"float-lg-end"},{"title":"Float LG None","classes":"float-lg-none"},{"title":"Float XL Left","classes":"float-xl-left"},{"title":"Float XL Right","classes":"float-xl-right"},{"title":"Float XL Start","classes":"float-xl-start"},{"title":"Float XL End","classes":"float-xl-end"},{"title":"Float XL None","classes":"float-xl-none"}])
      

      const OverflowData = markRaw([{"title":"Overflow Auto","classes":"overflow-auto"},{"title":"Overflow Hidden","classes":"overflow-hidden"},{"title":"Overflow Visible","classes":"overflow-visible"},{"title":"Overflow X Auto","classes":"overflow-x-auto force-nowrap"},{"title":"Overflow X Hidden","classes":"overflow-x-hidden force-nowrap"},{"title":"Overflow X Visible","classes":"overflow-x-visible force-nowrap"},{"title":"Overflow Y Auto","classes":"overflow-y-auto"},{"title":"Overflow Y Hidden","classes":"overflow-y-hidden"},{"title":"Overflow Y Visible","classes":"overflow-y-visible"}])
      

      const SizingData = markRaw([{"title":"Height Auto","classes":"h-auto"},{"title":"Height Screen","classes":"h-screen"},{"title":"Height 0","classes":"h-0"},{"title":"Height 25","classes":"h-25"},{"title":"Height 50","classes":"h-50"},{"title":"Height 75","classes":"h-75"},{"title":"Height 100","classes":"h-100"},{"title":"Width Auto","classes":"w-auto"},{"title":"Width 0","classes":"w-0"},{"title":"Width 25","classes":"w-25"},{"title":"Width 50","classes":"w-50"},{"title":"Width 75","classes":"w-75"},{"title":"Width 100","classes":"w-100"}])
      

      const SpacingData = markRaw([{"title":"Container","component":"div","states":["margin","marginSize"],"classes":"bg-orange-lighten-3 pa-0 ma-4 overflow-auto","children":[{"title":"Parent","component":"div","states":["margin","marginSize"],"builder":{"args":["direction","size"],"body":"return \`m\${direction}-\${size}\`"},"classes":"elevation-4","children":[{"title":"Child","component":"div","states":["padding","paddingSize"],"builder":{"args":["direction","size"],"body":"return \`p\${direction}-\${size}\`"},"classes":"bg-light-green-lighten-3 elevation-4","children":[{"title":"Content","component":"div","classes":"bg-white text-center py-6","content":"Use the controls on the right to try out the different spacing helpers."}]}]}]}])
      
      
      const spacingDirections = ['t', 'b', 'l', 'r', 's', 'e', 'x', 'y', 'a']
      const spacingAmounts = Array.from({ length: 17 }, (val, i) => \`\${i}\`)
      const spacingNegativeAmounts = Array.from({ length: 16 }, (val, i) => \`n\${i + 1}\`)
      const spacingDefaults = ['auto', ...spacingAmounts]
      const spacingMarginAmounts = [...spacingDefaults, ...spacingNegativeAmounts]
      

  <\/script>

  <template>
    <Story 
      id="vuetify"
      title="Vuetify"
      group="design-system"
      icon="mdi:vuetify"
      :layout='{"type":"single","iframe":true}'
      :responsiveDisabled='false'
    >
      
  <Variant
    icon="mdi:palette"
    title="Material Colors"
    :autoPropsDisabled="true"
  >
    
    <VuetifyVariant
      discriminator="color"
      classes="pa-4 display-block"
      text="name"
      :title='{"classes":"mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100","text":"Material Colors"}'
      :inline="true"
      :description='{"classes":"my-4 htw-text-gray-900 dark:htw-text-gray-100","divider":{"show":true,"classes":"my-4"},"text":"Each color from the specification gets converted to a background and text variant for styling within your application through a class, e.g. bg-red or text-red","link":{"url":"https://vuetifyjs.com/en/styles/colors/","text":"More information","blank":true,"classes":"my-4 htw-text-gray-900 dark:htw-text-gray-100 font-weight-bold"}}'
      :controls='[]'
      :variants='[{"name":"primary","darken":1,"lighten":0,"accent":0},{"name":"secondary","darken":1,"lighten":0,"accent":0},{"name":"success","darken":0,"lighten":0,"accent":0},{"name":"error","darken":0,"lighten":0,"accent":0},{"name":"warning","darken":0,"lighten":0,"accent":0},{"name":"info","darken":0,"lighten":0,"accent":0},{"name":"red","darken":4,"lighten":5,"accent":4},{"name":"pink","darken":4,"lighten":5,"accent":4},{"name":"purple","darken":4,"lighten":5,"accent":4},{"name":"deep-purple","darken":4,"lighten":5,"accent":4},{"name":"indigo","darken":4,"lighten":5,"accent":4},{"name":"blue","darken":4,"lighten":5,"accent":4},{"name":"light-blue","darken":4,"lighten":5,"accent":4},{"name":"cyan","darken":4,"lighten":5,"accent":4},{"name":"teal","darken":4,"lighten":5,"accent":4},{"name":"green","darken":4,"lighten":5,"accent":4},{"name":"light-green","darken":4,"lighten":5,"accent":4},{"name":"lime","darken":4,"lighten":5,"accent":4},{"name":"yellow","darken":4,"lighten":5,"accent":4},{"name":"amber","darken":4,"lighten":5,"accent":4},{"name":"orange","darken":4,"lighten":5,"accent":4},{"name":"deep-orange","darken":4,"lighten":5,"accent":4},{"name":"brown","darken":4,"lighten":5,"accent":0},{"name":"blue-grey","darken":4,"lighten":5,"accent":0},{"name":"grey","darken":4,"lighten":5,"accent":0}]'
      :playground='{"title":"Playground","classes":"mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100","divider":{"show":true,"classes":"ma-4"}}'
      :state="state"
      :containerized="false"
    />
  </Variant>

  <Variant
    icon="mdi:format-font"
    title="Text And Typography"
    :autoPropsDisabled="true"
  >
    <template #controls>
      <div>
        <v-autocomplete 
          v-model="state.typography" 
          label="Typography Classes"
          :items='TypographyData'
          item-title="title"
          item-value="classes"
        />
      </div>
    </template>
    <VuetifyVariant
      discriminator="class"
      classes="bg-grey-darken-4 pa-4 display-block rounded-lg"
      text="title"
      :title='{"classes":"mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100","text":"Text and Typography"}'
      :inline="false"
      :description='{"classes":"my-4 htw-text-gray-900 dark:htw-text-gray-100","divider":{"show":true,"classes":"my-4"},"text":"Text size, alignment, wrapping, overflow, transforms and more. By default, Vuetify uses the Material Design specification Roboto Font","link":{"url":"https://vuetifyjs.com/en/styles/text-and-typography/","text":"More information","blank":true,"classes":"my-4 htw-text-gray-900 dark:htw-text-gray-100 font-weight-bold"}}'
      :controls='[{"component":"v-autocomplete","model":"typography","label":"Typography Classes","itemsTitle":"title","itemsValue":"classes","playground":{"type":"class","sample":"sample","classes":"bg-grey-darken-4 pa-4 display-block rounded-lg"}}]'
      :variants='[{"title":"Heading 1","classes":"text-h1"},{"title":"Heading 2","classes":"text-h2"},{"title":"Heading 3","classes":"text-h3"},{"title":"Heading 4","classes":"text-h4"},{"title":"Heading 5","classes":"text-h5"},{"title":"Heading 6","classes":"text-h6"},{"title":"Subtitle 1","classes":"text-subtitle-1"},{"title":"Subtitle 2","classes":"text-subtitle-2"},{"title":"Body 1","classes":"text-body-1"},{"title":"Body 2","classes":"text-body-2"},{"title":"Button","classes":"text-button"},{"title":"Caption","classes":"text-caption"},{"title":"Overline","classes":"text-overline"},{"title":"Font Weight Black","classes":"font-weight-black"},{"title":"Font Weight Bold","classes":"font-weight-bold"},{"title":"Font Weight Medium","classes":"font-weight-medium"},{"title":"Font Weight Regular","classes":"font-weight-regular"},{"title":"Font Weight Light","classes":"font-weight-light"},{"title":"Font Weight Thin","classes":"font-weight-thin"},{"title":"Font Italic","classes":"font-italic"},{"title":"Text Left","classes":"text-left"},{"title":"Text Right","classes":"text-right"},{"title":"Text Center","classes":"text-center"},{"title":"Text Justify","classes":"text-justify"},{"title":"Text Start","classes":"text-start"},{"title":"Text End","classes":"text-end"},{"title":"Text Decoration None","classes":"text-decoration-none"},{"title":"Text Decoration Line Through","classes":"text-decoration-line-through"},{"title":"Text Decoration Overline","classes":"text-decoration-overline"},{"title":"Text Decoration Underline","classes":"text-decoration-underline"},{"title":"Text High Emphasis","classes":"text-high-emphasis"},{"title":"Text Medium Emphasis","classes":"text-medium-emphasis"},{"title":"Text Disabled","classes":"text-disabled"},{"title":"Text Lowercase","classes":"text-lowercase"},{"title":"Text Uppercase","classes":"text-uppercase"},{"title":"Text Capitalize","classes":"text-capitalize"},{"title":"Text No Wrap","classes":"text-no-wrap"},{"title":"Text Truncate","classes":"text-truncate"}]'
      :playground='{"title":"Playground","classes":"mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100","divider":{"show":true,"classes":"ma-4"}}'
      :state="state"
      :containerized="false"
    />
  </Variant>

  <Variant
    icon="mdi:border-all"
    title="Border Radius"
    :autoPropsDisabled="true"
  >
    <template #controls>
      <div>
        <v-autocomplete 
          v-model="state.borderRadius" 
          label="Border Radius Classes"
          :items='BorderRadiusData'
          item-title="title"
          item-value="classes"
        />
      </div>
    </template>
    <VuetifyVariant
      discriminator="class"
      classes="bg-grey-darken-4 pa-4 display-square pt-10 text-center"
      text="title"
      :title='{"classes":"mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100","text":"Border Radius"}'
      :inline="true"
      :description='{"classes":"my-4 htw-text-gray-900 dark:htw-text-gray-100","divider":{"show":true,"classes":"my-4"},"text":"Use border utilities to quickly style the border-radius of any element.","link":{"url":"https://vuetifyjs.com/en/styles/border-radius/","text":"More information","blank":true,"classes":"my-4 htw-text-gray-900 dark:htw-text-gray-100 font-weight-bold"}}'
      :controls='[{"component":"v-autocomplete","model":"borderRadius","label":"Border Radius Classes","itemsTitle":"title","itemsValue":"classes","playground":{"type":"class","classes":"bg-grey-darken-4 pa-4 display-block"}}]'
      :variants='[{"title":"Rounded 0","classes":"rounded-0"},{"title":"Rounded SM","classes":"rounded-sm"},{"title":"Rounded","classes":"rounded"},{"title":"Rounded LG","classes":"rounded-lg"},{"title":"Rounded XL","classes":"rounded-xl"},{"title":"Rounded Pill","classes":"rounded-pill"},{"title":"Rounded Circle","classes":"rounded-circle"},{"title":"Rounded Shaped","classes":"rounded-shaped"}]'
      :playground='{"title":"Playground","classes":"mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100","divider":{"show":true,"classes":"ma-4"}}'
      :state="state"
      :containerized="false"
    />
  </Variant>

  <Variant
    icon="mdi:view-grid-plus"
    title="Content"
    :autoPropsDisabled="true"
  >
    
    <VuetifyVariant
      discriminator="component"
      classes="bg-grey-darken-4 pa-4 display-block rounded-lg"
      text=""
      :title='{"classes":"mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100","text":"Content"}'
      :inline="false"
      :description='{"classes":"my-4 htw-text-gray-900 dark:htw-text-gray-100","divider":{"show":true,"classes":"my-4"},"text":"Vuetify has custom styling for multiple standard elements.","link":{"url":"https://vuetifyjs.com/en/styles/content/","text":"More information","blank":true,"classes":"my-4 htw-text-gray-900 dark:htw-text-gray-100 font-weight-bold"}}'
      :controls='[]'
      :variants='[{"title":"Block Quote","component":"blockquote","classes":"","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{"title":"Paragraph","component":"p","classes":"","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at."},{"title":"Code","component":"code","classes":"","content":"<div>This is a code example.</div>"},{"title":"Variable","component":"var","classes":"","content":"v"}]'
      :playground='{"title":"Playground","classes":"mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100","divider":{"show":true,"classes":"ma-4"}}'
      :state="state"
      :containerized="false"
    />
  </Variant>

  <Variant
    icon="mdi:box-shadow"
    title="Elevation"
    :autoPropsDisabled="true"
  >
    <template #controls>
      <div>
        <v-autocomplete 
          v-model="state.elevation" 
          label="Elevation"
          :items='ElevationData'
          item-title="title"
          item-value="classes"
        />
      </div>
    </template>
    <VuetifyVariant
      discriminator="class"
      classes="bg-grey-darken-4 pa-4 display-square d-line-block rounded-lg text-center"
      text="item.title"
      :title='{"classes":"mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100","text":"Elevation"}'
      :inline="true"
      :description='{"classes":"my-4 htw-text-gray-900 dark:htw-text-gray-100","divider":{"show":true,"classes":"my-4"},"text":"The elevation helpers allow you to control relative depth, or distance, between two surfaces along the z-axis.","link":{"url":"https://vuetifyjs.com/en/styles/elevation/","text":"More information","blank":true,"classes":"my-4 htw-text-gray-900 dark:htw-text-gray-100 font-weight-bold"}}'
      :controls='[{"component":"v-autocomplete","model":"elevation","label":"Elevation","itemsTitle":"title","itemsValue":"classes","playground":{"type":"class","sample":"sample","classes":"bg-grey-darken-4 pa-4 rounded-lg"}}]'
      :variants='[{"title":"Elevation 0","classes":"elevation-0"},{"title":"Elevation 1","classes":"elevation-1"},{"title":"Elevation 2","classes":"elevation-2"},{"title":"Elevation 3","classes":"elevation-3"},{"title":"Elevation 4","classes":"elevation-4"},{"title":"Elevation 5","classes":"elevation-5"},{"title":"Elevation 6","classes":"elevation-6"},{"title":"Elevation 7","classes":"elevation-7"},{"title":"Elevation 8","classes":"elevation-8"},{"title":"Elevation 9","classes":"elevation-9"},{"title":"Elevation 10","classes":"elevation-10"},{"title":"Elevation 11","classes":"elevation-11"},{"title":"Elevation 12","classes":"elevation-12"},{"title":"Elevation 13","classes":"elevation-13"},{"title":"Elevation 14","classes":"elevation-14"},{"title":"Elevation 15","classes":"elevation-15"},{"title":"Elevation 16","classes":"elevation-16"},{"title":"Elevation 17","classes":"elevation-17"},{"title":"Elevation 18","classes":"elevation-18"},{"title":"Elevation 19","classes":"elevation-19"},{"title":"Elevation 20","classes":"elevation-20"},{"title":"Elevation 21","classes":"elevation-21"},{"title":"Elevation 22","classes":"elevation-22"},{"title":"Elevation 23","classes":"elevation-23"},{"title":"Elevation 24","classes":"elevation-24"}]'
      :playground='{"title":"Playground","classes":"mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100","divider":{"show":true,"classes":"ma-4"}}'
      :state="state"
      :containerized="false"
    />
  </Variant>

  <Variant
    icon="mdi:monitor-screenshot"
    title="Display"
    :autoPropsDisabled="true"
  >
    <template #controls>
      <div>
        <v-autocomplete 
          v-model="state.display" 
          label="Display"
          :items='DisplayData'
          item-title="title"
          item-value="classes"
        />
      </div>
    </template>
    <VuetifyVariant
      discriminator="class"
      classes="bg-grey-darken-4 pa-4 display-square rounded-lg text-center"
      text="title"
      :title='{"classes":"mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100","text":"Display"}'
      :inline="true"
      :description='{"classes":"my-4 htw-text-gray-900 dark:htw-text-gray-100","divider":{"show":true,"classes":"my-4"},"text":"The display helpers allow you to control the display of content.","link":{"url":"https://vuetifyjs.com/en/styles/display/","text":"More information","blank":true,"classes":"my-4 htw-text-gray-900 dark:htw-text-gray-100 font-weight-bold"}}'
      :controls='[{"component":"v-autocomplete","model":"display","label":"Display","itemsTitle":"title","itemsValue":"classes","playground":{"type":"class","sample":"sample","classes":"bg-grey-darken-4 pa-4 rounded-lg"}}]'
      :variants='[{"title":"Display Inline Block","classes":"d-inline-block","duplicate":3},{"title":"Display Inline","classes":"d-inline"},{"title":"Display Block","classes":"d-block"},{"title":"Display Block Breakpoint SM","classes":"d-block d-sm-inline-block"},{"title":"Display Block Breakpoint MD","classes":"d-block d-md-inline-block"},{"title":"Display Block Breakpoint LG","classes":"d-block d-lg-inline-block"},{"title":"Display Block Breakpoint XL","classes":"d-block d-xl-inline-block"},{"title":"Display Block Breakpoint XXL","classes":"d-block d-xxl-inline-block"},{"title":"Hidden On All","classes":"d-none"},{"title":"Hidden Only On XS","classes":"d-none d-sm-block"},{"title":"Hidden Only On SM","classes":"d-none d-md-block"},{"title":"Hidden Only On MD","classes":"d-none d-lg-block"},{"title":"Hidden Only On LG","classes":"d-none d-xl-block"},{"title":"Hidden Only On XL","classes":"d-none d-xxl-block"},{"title":"Hidden Only On XXL","classes":"d-none"},{"title":"Visible On All","classes":"d-block"},{"title":"Visible Only On XS","classes":"d-block d-sm-none"},{"title":"Visible Only On SM","classes":"d-none d-sm-block d-md-none"},{"title":"Visible Only On MD","classes":"d-none d-md-block d-lg-none"},{"title":"Visible Only On LG","classes":"d-none d-lg-block d-xl-none"},{"title":"Visible Only On XL","classes":"d-none d-xl-block d-xxl-none"},{"title":"Visible Only On XXL","classes":"d-none d-xxl-block"}]'
      :playground='{"title":"Playground","classes":"mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100","divider":{"show":true,"classes":"ma-4"}}'
      :state="state"
      :containerized="false"
    />
  </Variant>

  <Variant
    icon="mdi:format-float-left"
    title="Float"
    :autoPropsDisabled="true"
  >
    <template #controls>
      <div>
        <v-autocomplete 
          v-model="state.float" 
          label="Float"
          :items='FloatData'
          item-title="title"
          item-value="classes"
        />
      </div>
    </template>
    <VuetifyVariant
      discriminator="class"
      classes="bg-grey-darken-4 pa-4 display-square rounded-lg text-center"
      text="item.title"
      :title='{"classes":"mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100","text":"Float"}'
      :inline="false"
      :description='{"classes":"my-4 htw-text-gray-900 dark:htw-text-gray-100","divider":{"show":true,"classes":"my-4"},"text":"Applies a custom float across any breakpoint with responsive float utilities.","link":{"url":"https://vuetifyjs.com/en/styles/float/","text":"More information","blank":true,"classes":"my-4 htw-text-gray-900 dark:htw-text-gray-100 font-weight-bold"}}'
      :controls='[{"component":"v-autocomplete","model":"float","label":"Float","itemsTitle":"title","itemsValue":"classes","playground":{"type":"class","sample":"sample","classes":"bg-grey-darken-4 pa-4 rounded-lg display-square "}}]'
      :variants='[{"title":"Float Left","classes":"float-left"},{"title":"Float Right","classes":"float-right"},{"title":"Float Start","classes":"float-start"},{"title":"Float End","classes":"float-end"},{"title":"Float None","classes":"float-none"},{"title":"Float SM Left","classes":"float-sm-left"},{"title":"Float SM Right","classes":"float-sm-right"},{"title":"Float SM Start","classes":"float-sm-start"},{"title":"Float SM End","classes":"float-sm-end"},{"title":"Float SM None","classes":"float-sm-none"},{"title":"Float MD Left","classes":"float-md-left"},{"title":"Float MD Right","classes":"float-md-right"},{"title":"Float MD Start","classes":"float-md-start"},{"title":"Float MD End","classes":"float-md-end"},{"title":"Float MD None","classes":"float-md-none"},{"title":"Float LG Left","classes":"float-lg-left"},{"title":"Float LG Right","classes":"float-lg-right"},{"title":"Float LG Start","classes":"float-lg-start"},{"title":"Float LG End","classes":"float-lg-end"},{"title":"Float LG None","classes":"float-lg-none"},{"title":"Float XL Left","classes":"float-xl-left"},{"title":"Float XL Right","classes":"float-xl-right"},{"title":"Float XL Start","classes":"float-xl-start"},{"title":"Float XL End","classes":"float-xl-end"},{"title":"Float XL None","classes":"float-xl-none"}]'
      :playground='{"title":"Playground","classes":"mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100","divider":{"show":true,"classes":"ma-4"}}'
      :state="state"
      :containerized="false"
    />
  </Variant>

  <Variant
    icon="mdi:format-text-wrapping-overflow"
    title="Overflow"
    :autoPropsDisabled="true"
  >
    <template #controls>
      <div>
        <v-autocomplete 
          v-model="state.overflow" 
          label="Overflow"
          :items='OverflowData'
          item-title="title"
          item-value="classes"
        />
      </div>
    </template>
    <VuetifyVariant
      discriminator="class"
      classes="bg-grey-darken-4 pa-4 display-square rounded-lg text-center"
      text="overflowSample"
      :title='{"classes":"mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100","text":"Overflow"}'
      :inline="true"
      :description='{"classes":"my-4 htw-text-gray-900 dark:htw-text-gray-100","divider":{"show":true,"classes":"my-4"},"text":"Configure how content overflows when it becomes out of container bounds.","link":{"url":"https://vuetifyjs.com/en/styles/overflow/","text":"More information","blank":true,"classes":"my-4 htw-text-gray-900 dark:htw-text-gray-100 font-weight-bold"}}'
      :controls='[{"component":"v-autocomplete","model":"overflow","label":"Overflow","itemsTitle":"title","itemsValue":"classes","playground":{"type":"class","sample":"overflowSample","classes":"bg-grey-darken-4 pa-4 rounded-lg display-square "}}]'
      :variants='[{"title":"Overflow Auto","classes":"overflow-auto"},{"title":"Overflow Hidden","classes":"overflow-hidden"},{"title":"Overflow Visible","classes":"overflow-visible"},{"title":"Overflow X Auto","classes":"overflow-x-auto force-nowrap"},{"title":"Overflow X Hidden","classes":"overflow-x-hidden force-nowrap"},{"title":"Overflow X Visible","classes":"overflow-x-visible force-nowrap"},{"title":"Overflow Y Auto","classes":"overflow-y-auto"},{"title":"Overflow Y Hidden","classes":"overflow-y-hidden"},{"title":"Overflow Y Visible","classes":"overflow-y-visible"}]'
      :playground='{"title":"Playground","classes":"mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100","divider":{"show":true,"classes":"ma-4"}}'
      :state="state"
      :containerized="false"
    />
  </Variant>

  <Variant
    icon="mdi:image-size-select-small"
    title="Sizing"
    :autoPropsDisabled="true"
  >
    <template #controls>
      <div>
        <v-autocomplete 
          v-model="state.sizing" 
          label="Sizing"
          :items='SizingData'
          item-title="title"
          item-value="classes"
        />
      </div>
    </template>
    <VuetifyVariant
      discriminator="class"
      classes="bg-grey-darken-4 pa-4 display-square rounded-lg text-center"
      text="title"
      :title='{"classes":"mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100","text":"Sizing"}'
      :inline="true"
      :description='{"classes":"my-4 htw-text-gray-900 dark:htw-text-gray-100","divider":{"show":true,"classes":"my-4"},"text":"Sizing utility classes are used to modify the dimensions of an element.","link":{"url":"https://vuetifyjs.com/en/styles/sizing/","text":"More information","blank":true,"classes":"my-4 htw-text-gray-900 dark:htw-text-gray-100 font-weight-bold"}}'
      :controls='[{"component":"v-autocomplete","model":"sizing","label":"Sizing","itemsTitle":"title","itemsValue":"classes","playground":{"type":"class","sample":"sample","classes":"bg-grey-darken-4 pa-4 rounded-lg display-square "}}]'
      :variants='[{"title":"Height Auto","classes":"h-auto"},{"title":"Height Screen","classes":"h-screen"},{"title":"Height 0","classes":"h-0"},{"title":"Height 25","classes":"h-25"},{"title":"Height 50","classes":"h-50"},{"title":"Height 75","classes":"h-75"},{"title":"Height 100","classes":"h-100"},{"title":"Width Auto","classes":"w-auto"},{"title":"Width 0","classes":"w-0"},{"title":"Width 25","classes":"w-25"},{"title":"Width 50","classes":"w-50"},{"title":"Width 75","classes":"w-75"},{"title":"Width 100","classes":"w-100"}]'
      :playground='{"title":"Playground","classes":"mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100","divider":{"show":true,"classes":"ma-4"}}'
      :state="state"
      :containerized="false"
    />
  </Variant>

  <Variant
    icon="mdi:space-invaders"
    title="Spacing"
    :autoPropsDisabled="true"
  >
    <template #controls>
      <div>
        <v-autocomplete 
          v-model="state.padding" 
          label="Padding"
          :items='spacingDirections'
          
          
        />
      </div>
    
      <div>
        <v-autocomplete 
          v-model="state.paddingSize" 
          label="Padding Size"
          :items='spacingDefaults'
          
          
        />
      </div>
    
      <div>
        <v-autocomplete 
          v-model="state.margin" 
          label="Margin"
          :items='spacingDirections'
          
          
        />
      </div>
    
      <div>
        <v-autocomplete 
          v-model="state.marginSize" 
          label="Margin Size"
          :items='spacingMarginAmounts'
          
          
        />
      </div>
    </template>
    <VuetifyVariant
      discriminator="component"
      classes="bg-orange-lighten-3"
      text="title"
      :title='{"classes":"mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100","text":"Spacing"}'
      :inline="false"
      :description='{"classes":"my-4 htw-text-gray-900 dark:htw-text-gray-100","divider":{"show":true,"classes":"my-4"},"text":"Update your layout without creating new classes.","link":{"url":"https://vuetifyjs.com/en/styles/spacing/","text":"More information","blank":true,"classes":"my-4 htw-text-gray-900 dark:htw-text-gray-100 font-weight-bold"}}'
      :controls='[{"component":"v-autocomplete","model":"padding","label":"Padding","items":"spacingDirections"},{"component":"v-autocomplete","model":"paddingSize","label":"Padding Size","items":"spacingDefaults"},{"component":"v-autocomplete","model":"margin","label":"Margin","items":"spacingDirections"},{"component":"v-autocomplete","model":"marginSize","label":"Margin Size","items":"spacingMarginAmounts"}]'
      :variants='[{"title":"Container","component":"div","states":["margin","marginSize"],"classes":"bg-orange-lighten-3 pa-0 ma-4 overflow-auto","children":[{"title":"Parent","component":"div","states":["margin","marginSize"],"builder":{"args":["direction","size"],"body":"return \`m\${direction}-\${size}\`"},"classes":"elevation-4","children":[{"title":"Child","component":"div","states":["padding","paddingSize"],"builder":{"args":["direction","size"],"body":"return \`p\${direction}-\${size}\`"},"classes":"bg-light-green-lighten-3 elevation-4","children":[{"title":"Content","component":"div","classes":"bg-white text-center py-6","content":"Use the controls on the right to try out the different spacing helpers."}]}]}]}]'
      :playground='{"title":"Playground","classes":"mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100","divider":{"show":true,"classes":"ma-4"}}'
      :state="state"
      :containerized="true"
    />
  </Variant>
    </Story>
  </template>`;
export {
  __resolved__virtual_storySource_vuetify as default
};
