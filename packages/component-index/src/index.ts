export interface DesignSystemComponent {
  id: string;
  name: string;
  aliases?: string[];
  communityDocs?: CommunityDocumentation[];
  implementations?: ComponentImplementation[];
  preview?: string;
  backlog?: string;
  discussion?: string;
  state: COMPONENT_STATES;
}

export interface CommunityDocumentation {
  type: DOCUMENTATION_TYPES;
  organisation: ORGANISATIONS;
  href: string;
}

export interface ComponentImplementation {
  organisation: ORGANISATIONS;
  type: COMPONENT_TYPES;
  implementation: string;
  package?: string;
  story?: string;
  storyTemplate?: string;
  designTokenPrefixes?: string[];
}

export enum COMPONENT_TYPES {
  CSS = 'CSS',
  HTML = 'HTML',
  WEB_COMPONENT = 'Web Component',
  REACT = 'React',
  VUE = 'Vue',
  ANGULAR = 'Angular',
  FIGMA = 'Figma',
}

export enum ORGANISATIONS {
  DEN_HAAG = 'Gemeente Den Haag',
  UTRECHT = 'Gemeente Utrecht',
  NLDS = 'NL Design System',
}

export enum COMPONENT_STATES {
  DISCOURAGED = 'Discouraged',
  TODO = 'Help Wanted',
  UNKNOWN = 'Unknown',
  COMMUNITY = 'Community',
  NL_UNSTABLE = 'Candidate',
  NL_STABLE = 'Hall of fame',
}

export enum DOCUMENTATION_TYPES {
  UX = 'UX',
  A11Y = 'A11y',
  COPY = 'Content richtlijnen',
}

export const componentIndex: DesignSystemComponent[] = [
  {
    id: 'text-input',
    name: 'Text input',
    aliases: ['text-field', 'textbox'],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/denhaag/blob/main/components/TextField/README.md',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/utrecht/tree/main/components/textbox/README.md',
      },
    ],
    implementations: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.REACT,
        package: '@gemeente-denhaag/textfield',
        implementation: 'https://github.com/nl-design-system/denhaag/blob/main/components/TextField/src/index.tsx',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/react-input-textfield--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/textbox/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-textbox--default-story',
        storyTemplate: '@utrecht/components/textbox/css/story-template.jsx',
        package: '@utrecht/component-library-css',
        designTokenPrefixes: ['utrecht.textbox'],
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.CSS,
        package: '@gemeente-denhaag/textfield',
        implementation: 'https://github.com/nl-design-system/denhaag/blob/main/components/TextField/src/index.scss',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.FIGMA,
        implementation: 'https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.HTML,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/textbox/html',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-textbox--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.FIGMA,
        implementation: 'https://www.figma.com/file/msb3CfQBefPoruqNQ968Zh/Utrecht-Design-System?node-id=302%3A3975',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.WEB_COMPONENT,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/textbox/web-component',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-textbox--default-story',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=859-981',
      },
    ],
    preview: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_text-input.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/5',
  },
  {
    id: 'status-badge',
    name: 'Status badge',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/blob/main/components/badge-status/css/index.scss',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-status-badge--default-story',
        storyTemplate: '@utrecht/components/badge-status/css/story-template.jsx',
        package: '@utrecht/component-library-css',
        designTokenPrefixes: ['utrecht.badge-status', 'utrecht.feedback', 'utrecht.badge'],
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1354-6672',
      },
    ],
    preview: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_status-badge.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/6',
  },
  {
    id: 'counter-badge',
    name: 'Counter badge',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/denhaag/blob/main/components/BadgeCounter/README.md',
      },
    ],
    implementations: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/denhaag/blob/main/components/BadgeCounter/src/index.scss',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/css-data-display-badge-counter--default-story',
        package: '@gemeente-denhaag/badge-counter',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/badge-counter/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-counter-badge--default-story',
        package: '@utrecht/component-library-css',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.WEB_COMPONENT,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/badge-counter/web-component',
        story:
          'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-counter-badge--default-story',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1233-4271',
      },
    ],
    preview: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_counter-badge.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/7',
    discussion: 'https://github.com/orgs/nl-design-system/discussions/214',
  },
  {
    id: 'alert',
    name: 'Alert',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/denhaag/blob/main/components/Alert/README.md',
      },
    ],
    implementations: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/denhaag/blob/main/components/Alert/src/index.scss',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/css-data-display-alert--error',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1179-3892',
      },
    ],
    preview: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_notification.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/9',
  },
  {
    id: 'switch',
    name: 'Switch',
    aliases: ['toggle', 'toggle-button', 'form-toggle'],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/denhaag/blob/main/components/Switch/README.md',
      },
    ],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/form-toggle/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-form-toggle--default-story',
        storyTemplate: '@utrecht/components/form-toggle/css/story-template.jsx',
        package: '@utrecht/component-library-css',
        designTokenPrefixes: ['utrecht.form-toggle'],
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.WEB_COMPONENT,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/form-toggle/web-component',
        story:
          'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-form-toggle--default-story',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.REACT,
        implementation: 'https://github.com/nl-design-system/denhaag/blob/main/components/Switch/src/index.tsx',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/react-input-switch--default',
      },
    ],
    preview: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_toggle.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/33',
  },
  {
    id: 'select',
    name: 'Select',
    aliases: ['dropdown-listbox', 'dropdown'],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/denhaag/blob/main/components/Select/README.md',
      },
    ],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/select',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-select--default-story',
        storyTemplate: '@utrecht/components/select/css/story-template.jsx',
        designTokenPrefixes: ['utrecht.select', 'utrecht.form-input'],
        package: '@utrecht/component-library-css',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1130-3652',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.REACT,
        implementation: 'https://github.com/nl-design-system/denhaag/blob/main/components/Select/src/index.tsx',
      },
    ],
    preview: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_select.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/34',
    discussion: 'https://github.com/orgs/nl-design-system/discussions/239',
  },
  {
    id: 'date-picker',
    name: 'Date picker',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/35',
  },
  {
    id: 'range',
    name: 'Range',
    aliases: ['slider'],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/36',
    discussion: 'https://github.com/orgs/nl-design-system/discussions/231',
  },
  {
    id: 'button',
    name: 'Button',
    aliases: ['button-primary', 'button-secondary'],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/utrecht/blob/main/components/button/docs/ux-guidelines.md',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: DOCUMENTATION_TYPES.A11Y,
        href: 'https://github.com/nl-design-system/utrecht/blob/main/components/button/docs/accessibility.md',
      },
    ],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/button/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-button--button',
        storyTemplate: '@utrecht/components/button/css/story-template.jsx',
        package: '@utrecht/component-library-css',
        designTokenPrefixes: ['utrecht.button'],
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.HTML,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/button/html',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-button--button',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.WEB_COMPONENT,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/button/web-component',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-button--button',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/denhaag/tree/main/components/Button',
        story: 'https://nl-design-system.github.io/denhaag/?path=/docs/css-input-button--default-story',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=153-1138',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=1%3A656',
      },
    ],
    preview: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_button.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/38',
    discussion: 'https://github.com/orgs/nl-design-system/discussions/205',
  },
  {
    id: 'table',
    name: 'Table',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/denhaag/tree/main/components/Table',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/css-data-display-table--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.HTML,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/table/html',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-table--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/table/css',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.WEB_COMPONENT,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/table/web-component',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-table--default-story',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1561-6277',
      },
    ],
    preview: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_table.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/39',
  },
  {
    id: 'textarea',
    name: 'Textarea',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/denhaag/blob/main/components/TextArea/README.md',
      },
    ],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/textarea/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-textarea--default-story',
        storyTemplate: '@utrecht/components/textarea/css/story-template.jsx',
        package: '@utrecht/component-library-css',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.HTML,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/textarea/html',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-textarea--default-story',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.REACT,
        implementation: 'https://github.com/nl-design-system/denhaag/tree/main/components/TextArea',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/react-input-text-area--default-story',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=7062%3A17687',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=969-2047',
      },
    ],
    preview: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_textarea.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/40',
  },
  // Needs rationale and a clear name
  // {
  //   id: 'step-indicator',
  //   name: 'Step Indicator',
  //   aliases: ['form-progress'],
  //   state: COMPONENT_STATES.UNKNOWN,
  //   communityDocs: [],
  //   implementations: [],
  //   preview: '',
  //   backlog: 'https://github.com/nl-design-system/backlog/issues/41',
  // },
  {
    id: 'progress',
    name: 'Progress',
    aliases: ['progress-bar', 'progress-indicator'],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [],
    preview: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_progress.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/42',
  },
  {
    id: 'tooltip',
    name: 'Tooltip',
    aliases: [],
    state: COMPONENT_STATES.DISCOURAGED,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/50',
  },
  {
    id: 'tabs',
    name: 'Tabs',
    aliases: ['tab'],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/denhaag/tree/main/components/Tab/README.md',
      },
    ],
    implementations: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.REACT,
        implementation: 'https://github.com/nl-design-system/denhaag/blob/main/components/Tab/src/Tabs.tsx',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/react-navigation-tab--default',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=5020%3A18454',
      },
    ],
    preview: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_tabs.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/51',
    discussion: 'https://github.com/orgs/nl-design-system/discussions/232',
  },
  // Needs rationale and a decision if it is a best-practice or component for NL Design System
  // {
  //   id: 'main-navigation',
  //   name: 'Main navigation',
  //   aliases: [],
  //   state: COMPONENT_STATES.UNKNOWN,
  //   communityDocs: [],
  //   implementations: [],
  //   preview: '',
  //   backlog: 'https://github.com/nl-design-system/backlog/issues/52',
  // },
  {
    id: 'side-navigation',
    name: 'Side navigation',
    aliases: ['sidebar'],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/navigatie%20sidenav/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-sidenav--default-story',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1670-10258',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/53',
    discussion: 'https://github.com/orgs/nl-design-system/discussions/242',
  },
  {
    id: 'breadcrumb',
    name: 'Breadcrumb navigation',
    aliases: ['breadcrumb-bar'],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/denhaag/blob/main/components/Breadcrumb/README.md',
      },
    ],
    implementations: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/denhaag/tree/main/components/Breadcrumb',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/css-navigation-breadcrumb--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/breadcrumb/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-breadcrumb--default-story',
        storyTemplate: '@utrecht/components/breadcrumb/css/story-template.jsx',
        package: '@utrecht/component-library-css',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.WEB_COMPONENT,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/breadcrumb/web-component',
        story:
          'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-breadcrumb--default-story',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1862-9575',
      },
    ],
    preview: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_breadcrumbs.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/54',
    discussion: 'https://github.com/orgs/nl-design-system/discussions/224',
  },
  {
    id: 'page-header',
    name: 'Page header',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/55',
  },
  {
    id: 'page-footer',
    name: 'Page footer',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/56',
  },
  {
    id: 'checkbox',
    name: 'Checkbox',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/custom-checkbox/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-custom-checkbox--default-story',
        storyTemplate: '@utrecht/components/custom-checkbox/css/story-template.jsx',
        package: '@utrecht/component-library-css',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.HTML,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/checkbox/html',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-checkbox--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.WEB_COMPONENT,
        implementation:
          'https://github.com/nl-design-system/utrecht/tree/main/components/custom-checkbox/web-component',
        story:
          'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-custom-checkbox--default-story',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.REACT,
        implementation: 'https://github.com/nl-design-system/denhaag/tree/main/components/Checkbox',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/react-input-checkbox--default-story',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=1450%3A4570',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=944-1535',
      },
    ],
    preview: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_checkbox.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/64',
  },
  {
    id: 'radio',
    name: 'Radio button',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/denhaag/tree/main/components/Radio/README.md',
      },
    ],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/custom-radio-button/css',
        story:
          'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-custom-radio-button--default-story',
        storyTemplate: '@utrecht/components/radio-button/css/story-template.jsx',
        package: '@utrecht/component-library-css',
        designTokenPrefixes: ['utrecht.radio-button'],
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.HTML,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/radio-button/html',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-radio-button--default-story',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.REACT,
        implementation: 'https://github.com/nl-design-system/denhaag/tree/main/components/Radio/src/index.tsx',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/react-input-radio-radio--default',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/denhaag/tree/main/components/Radio/src/index.scss',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/css-input-radio--default-story',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1039-2941',
      },
    ],
    preview: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_radio-button.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/65',
  },
  {
    id: 'modal-dialog',
    name: 'Modal dialog',
    aliases: ['modal'],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/denhaag/tree/main/components/Modal',
      },
    ],
    implementations: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/denhaag/blob/main/components/Modal/src/index.scss',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/css-feedback-modal--default-story',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?type=design&node-id=5910-3096&',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/66',
    discussion: 'https://github.com/orgs/nl-design-system/discussions/237',
  },
  {
    id: 'video',
    name: 'Video',
    aliases: ['media-player'],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/69',
  },
  {
    id: 'figure',
    name: 'Figure',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/70',
    discussion: 'https://github.com/orgs/nl-design-system/discussions/221',
  },
  {
    id: 'file-input',
    name: 'File input',
    aliases: ['file-upload'],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=10817%3A61351',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/72',
  },
  {
    id: 'blockquote',
    name: 'Blockquote',
    aliases: ['quote', 'pull-quote'],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/blockquote/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-blockquote--default-story',
        storyTemplate: '@utrecht/components/blockquote/css/story-template.jsx',
        package: '@utrecht/component-library-css',
        designTokenPrefixes: ['utrecht.blockquote'],
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.HTML,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/blockquote/html',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-blockquote--default-story',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1349-6340',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/73',
    discussion: 'https://github.com/orgs/nl-design-system/discussions/219',
  },
  {
    id: 'skip-link',
    name: 'Skip link',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?type=design&node-id=2217-10122',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/74',
    discussion: 'https://github.com/orgs/nl-design-system/discussions/252',
  },
  {
    id: 'spinner',
    name: 'Spinner',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/75',
  },
  {
    id: 'avatar',
    name: 'Avatar',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=423-455',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/83',
  },
  // {
  //   id: 'description-list',
  //   name: 'Description List',
  //   aliases: [],
  //   state: COMPONENT_STATES.UNKNOWN,
  //   communityDocs: [],
  //   implementations: [],
  //   preview: '',
  //   backlog: 'https://github.com/nl-design-system/backlog/issues/92',
  // },
  {
    id: 'data-badge',
    name: 'Data badge',
    aliases: ['text-badge', 'tag', 'chip'],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/94',
  },
  {
    id: 'dot-badge',
    name: 'Dot badge',
    aliases: ['dot-indicator'],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.REACT,
        implementation: 'https://github.com/nl-design-system/denhaag/tree/main/components/DotIndicator/src',
        story:
          'https://nl-design-system.github.io/denhaag/?path=/story/react-data-display-dot-indicator--indicator-on-rectangle',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/98',
  },
  {
    id: 'card-as-link',
    name: 'Card as link',
    aliases: ['link-card'],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/101',
  },
  {
    id: 'accordion',
    name: 'Accordion',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/denhaag/blob/main/components/Accordion/README.md',
      },
    ],
    implementations: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.CSS,
        package: '@gemeente-denhaag/accordion',
        implementation: 'https://github.com/nl-design-system/denhaag/blob/main/components/Accordion/src/index.scss',
        story: 'https://nl-design-system.github.io/denhaag/?path=/docs/css-surfaces-accordion--default-story',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=1585%3A0',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1261-4784',
      },
    ],
    preview: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_accordion.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/102',
    discussion: 'https://github.com/orgs/nl-design-system/discussions/217',
  },
  {
    id: 'pagination',
    name: 'Pagination',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/denhaag/tree/main/components/Pagination/README.md',
      },
    ],
    implementations: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/denhaag/blob/main/components/Pagination/src/index.scss',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/css-navigation-pagination--default-story',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.REACT,
        implementation: 'https://github.com/nl-design-system/denhaag/blob/main/components/Pagination/src/index.tsx',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=1673%3A231',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1691-11779',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/106',
  },
  {
    id: 'heading',
    name: 'Heading',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/heading/web-component',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-heading--default-story',
      },
    ],
    preview: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_headings.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/114',
    discussion: 'https://github.com/orgs/nl-design-system/discussions/220',
  },
  {
    id: 'heading-1',
    name: 'Heading 1',
    aliases: ['h1'],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/heading/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-heading-1--default-story',
        storyTemplate: '@utrecht/components/heading-1/css/story-template.jsx',
        package: '@utrecht/component-library-css',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=153-1039',
      },
    ],
    preview: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_headings.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/114',
  },
  {
    id: 'heading-2',
    name: 'Heading 2',
    aliases: ['h2'],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/heading/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-heading-2--default-story',
        storyTemplate: '@utrecht/components/heading-2/css/story-template.jsx',
        package: '@utrecht/component-library-css',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=153-1039',
      },
    ],
    preview: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_headings.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/114',
  },
  {
    id: 'heading-3',
    name: 'Heading 3',
    aliases: ['h3'],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/heading/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-heading-3--default-story',
        storyTemplate: '@utrecht/components/heading-3/css/story-template.jsx',
        package: '@utrecht/component-library-css',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=153-1039',
      },
    ],
    preview: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_headings.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/114',
  },
  {
    id: 'heading-4',
    name: 'Heading 4',
    aliases: ['h4'],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/heading/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-heading-4--default-story',
        storyTemplate: '@utrecht/components/heading-4/css/story-template.jsx',
        package: '@utrecht/component-library-css',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=153-1039',
      },
    ],
    preview: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_headings.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/114',
  },
  {
    id: 'heading-5',
    name: 'Heading 5',
    aliases: ['h5'],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/heading/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-heading-5--default-story',
        storyTemplate: '@utrecht/components/heading-5/css/story-template.jsx',
        package: '@utrecht/component-library-css',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=153-1039',
      },
    ],
    preview: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_headings.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/114',
  },
  {
    id: 'heading-6',
    name: 'Heading 6',
    aliases: ['h6'],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/heading/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-heading-6--default-story',
        storyTemplate: '@utrecht/components/heading-6/css/story-template.jsx',
        package: '@utrecht/component-library-css',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=153-1039',
      },
    ],
    preview: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_headings.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/114',
  },
  {
    id: 'paragraph',
    name: 'Paragraph',
    aliases: ['alinea', 'text'],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/paragraph/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-paragraph--default-story',
        storyTemplate: '@utrecht/components/paragraph/css/story-template.jsx',
        package: '@utrecht/component-library-css',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.HTML,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/paragraph/html',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-paragraph--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.WEB_COMPONENT,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/paragraph/web-component',
        story:
          'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-paragraph--default-story',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=150-734',
      },
    ],
    preview: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_paragraph.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/115',
    discussion: 'https://github.com/orgs/nl-design-system/discussions/212',
  },
  {
    id: 'unordered-list',
    name: 'Unordered list',
    aliases: ['ul'],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/unordered-list/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-unordered-list--default-story',
        storyTemplate: '@utrecht/components/unordered-list/css/story-template.jsx',
        package: '@utrecht/component-library-css',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.HTML,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/unordered-list/html',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-unordered-list--default-story',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=828-920',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/116',
    discussion: 'https://github.com/orgs/nl-design-system/discussions/229',
  },
  {
    id: 'ordered-list',
    name: 'Ordered list',
    aliases: ['ol'],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/ordered-list/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-ordered-list--default-story',
        storyTemplate: '@utrecht/components/ordered-list/css/story-template.jsx',
        package: '@utrecht/component-library-css',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.HTML,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/ordered-list/html',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-ordered-list--default-story',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=823-571',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/117',
    discussion: 'https://github.com/orgs/nl-design-system/discussions/230',
  },
  {
    id: 'link',
    name: 'Link',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/link/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-link--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.HTML,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/link/html',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-link--default-story',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/denhaag/tree/main/components/Link/src/index.scss',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/css-navigation-link--link',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.REACT,
        implementation: 'https://github.com/nl-design-system/denhaag/tree/main/components/Link/src/index.tsx',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/react-navigation-link--default-story',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=153-1056',
      },
    ],
    preview: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_text-link.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/118',
    discussion: 'https://github.com/orgs/nl-design-system/discussions/206',
  },
  {
    id: 'separator',
    name: 'Separator',
    aliases: ['divider'],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/denhaag/tree/main/components/Divider/README.md',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/utrecht/tree/main/components/separator/README.md',
      },
    ],
    implementations: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/denhaag/tree/main/components/Divider/src/index.scss',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/css-data-display-divider--default-story',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.REACT,
        implementation: 'https://github.com/nl-design-system/denhaag/tree/main/components/Divider/src/index.tsx',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/react-data-display-divider--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/separator/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-separator--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.HTML,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/separator/html',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-separator--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.WEB_COMPONENT,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/separator/web-component',
        story:
          'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-separator--default-story',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=843-1098',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/119',
    discussion: 'https://github.com/orgs/nl-design-system/discussions/236',
  },
  {
    id: 'form-field-error-message',
    name: 'Form field error message',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?type=design&node-id=851-939',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/122',
    discussion: 'https://github.com/orgs/nl-design-system/discussions/228',
  },
  {
    id: 'fieldset',
    name: 'Fieldset',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/form-fieldset/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-form-fieldset--default-story',
        storyTemplate: '@utrecht/components/form-fieldset/css/story-template.jsx',
        package: '@utrecht/component-library-css',
        designTokenPrefixes: ['utrecht.form-fieldset'],
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/124',
  },
  {
    id: 'number-input',
    name: 'Number input',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/125',
    discussion: 'https://github.com/orgs/nl-design-system/discussions/235',
  },
  {
    id: 'rich-text-content',
    name: 'Rich text content',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/127',
  },
  {
    id: 'checkbox-group',
    name: 'Checkbox group',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=954-2226',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/128',
    discussion: 'https://github.com/orgs/nl-design-system/discussions/223',
  },
  {
    id: 'radio-group',
    name: 'Radio group',
    aliases: ['radio-button-group'],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?type=design&node-id=954-1910',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/129',
    discussion: 'https://github.com/orgs/nl-design-system/discussions/222',
  },
  {
    id: 'character-count',
    name: 'Character count',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/130',
  },
  {
    id: 'password-input',
    name: 'Password input',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/133',
  },
  {
    id: 'strong',
    name: 'Strong',
    aliases: ['strong-emphasis'],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/emphasis/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-emphasis--strong',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.HTML,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/emphasis/html',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-emphasis--strong',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/138',
  },
  {
    id: 'progress-list',
    name: 'Progress list',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.HTML,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/emphasis/html',
        story: 'https://nl-design-system.github.io/denhaag/?path=/docs/react-process-steps-status--docs',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/150',
    discussion: 'https://github.com/orgs/nl-design-system/discussions/250',
  },
  {
    id: 'button-group',
    name: 'Button group',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?type=design&node-id=4626-10492',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/153',
    discussion: 'https://github.com/orgs/nl-design-system/discussions/234',
  },
  {
    id: 'notification-banner',
    name: 'Notification banner',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/169',
  },
  {
    id: 'toggletip',
    name: 'Toggletip',
    aliases: ['tooltip'],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/170',
  },
  {
    id: 'form-field-option-label',
    name: 'Form field option label',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1031-3472',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/171',
    discussion: 'https://github.com/orgs/nl-design-system/discussions/226',
  },
  {
    id: 'form-field-checkbox-option',
    name: 'Form field checkbox option',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1031-2917',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/172',
  },
  {
    id: 'form-field-radio-option',
    name: 'Form field radio option',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1039-2941',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/173',
  },
  {
    id: 'form-field-description',
    name: 'Form field description',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=851-924',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/174',
    discussion: 'https://github.com/orgs/nl-design-system/discussions/227',
  },
  {
    id: 'invalid-form-alert',
    name: 'Invalid form alert',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1300-5679',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/175',
  },
  {
    id: 'form-field',
    name: 'Form field',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=958-1925',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/176',
  },
  {
    id: 'form-field-label',
    name: 'Form field label',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=851-898',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/177',
  },
  {
    id: 'text-input-group',
    name: 'Text input group',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/178',
    discussion: 'https://github.com/orgs/nl-design-system/discussions/225',
  },
  {
    id: 'form-field-partial',
    name: 'Form field partial',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/179',
  },
  {
    id: 'form-field-partial-label',
    name: 'Form field partial label',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/180',
  },
  {
    id: 'non-modal-dialog',
    name: 'Non modal dialog',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/181',
  },
  {
    id: 'alert-dialog',
    name: 'Alert dialog',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/182',
  },
  {
    id: 'data-list',
    name: 'Data list',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1238-4478',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/185',
  },
  {
    id: 'legend',
    name: 'Legend',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/186',
  },
  {
    id: 'date-input',
    name: 'Date input',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/188',
  },
  {
    id: 'date-input-group',
    name: 'Date input group',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/189',
  },
  {
    id: 'calendar',
    name: 'Calendar',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.REACT,
        implementation: 'https://nl-design-system.github.io/utrecht/storybook-react/?path=/docs/react-calendar--docs',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/199',
  },
  {
    id: 'image',
    name: 'Image',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://nl-design-system.github.io/utrecht/storybook-css/?path=/docs/css-img--docs',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.REACT,
        implementation: 'https://nl-design-system.github.io/utrecht/storybook-react/?path=/docs/react-image--docs',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.VUE,
        implementation: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/vue_vue-image--docs',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/201',
  },
  {
    id: 'language-nav',
    name: 'Language navigation',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation:
          'https://nl-design-system.github.io/utrecht/storybook-css/index.html?path=/docs/css-alternate-lang-nav--docs',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.REACT,
        implementation:
          'https://nl-design-system.github.io/utrecht/storybook-react/index.html?path=/docs/react-alternate-lang-nav--docs',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/243',
  },
  {
    id: 'case-card',
    name: 'Case card',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.REACT,
        implementation: 'https://nl-design-system.github.io/denhaag/?path=/docs/react-cards-case-card--docs',
      },
    ],
    preview: '',
    backlog: undefined,
    discussion: 'https://github.com/orgs/nl-design-system/discussions/245',
  },
  {
    id: 'details',
    name: 'Details',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: undefined,
    discussion: 'https://github.com/orgs/nl-design-system/discussions/218',
  },
  {
    id: 'drawer',
    name: 'Drawer',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: undefined,
    discussion: 'https://github.com/orgs/nl-design-system/discussions/238',
  },
  {
    id: 'definition-list',
    name: 'Definition list',
    aliases: [],
    state: COMPONENT_STATES.UNKNOWN,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: undefined,
    discussion: 'https://github.com/orgs/nl-design-system/discussions/216',
  },
];
