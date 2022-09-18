export type input = {
  type: 'text' | 'number' | 'email' | 'password' | 'tel';
  name: string;
  label: string;
  events?: {
    focusout?: (e: FocusEvent) => void;
    focusin?: (e: FocusEvent) => void;
    click?: any;
  };
};
