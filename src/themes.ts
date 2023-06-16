/* eslint-disable camelcase */

import { Theme } from "./redux/themeSlice";

export const lightMode: Theme = {
  background: '#f3f4f6',
  menu_background: 'snow',
  text: '#3e8ad8',
  text_black: '#000',
  error: '#ed1741',
  element_bg: 'snow',
  multiValue: '#edf6fe',
  focused: '#edf6fe',
  focus_text: '#3e8ad8',
  selected: '#d5ebfe',
  disabled: 'rgba(0, 0, 0, 0.55)',
  menuBorder: '1px solid #BBB',
  boxShadow: '0 0 2px 2px rgb(195, 218, 238)',
  boxShadow_tiles: '0 5px 10px 0px rgba(150, 150, 150, 0.5)',
  singleKey_bg: '#f3f4f6',
  singleKey_border: '#d1d5db',
  invert_wave: 'invert(0%)',
  inverted_text: '#000', // for "Generating waveform" text: in lightMode it's not inverted, so it has to be black
  tooltip: '#363636',
  tooltip_text: '#fff',
  element_outline: '2px solid transparent',
  selected_text: '#3e8ad8',
  dropdown_border: '1px solid #ccc',
  menuButton_outline: '2px solid transparent',
  button_outline: 'none',
  button_color: '#edf6fe',
  indicator_color: '#3e8ad8',
  icon_color: '#fff',
  waveform_filter: 'invert(44%) sepia(8%) saturate(3893%) hue-rotate(169deg) brightness(99%) contrast(90%)', // All this just to turn the black part of the waveform image blue. Generated with: https://isotropic.co/tool/hex-color-to-css-filter/
  waveform_bg: '',
  scrubber: '#3f73a7',
  subtitle_segment_bg: 'rgba(0, 0, 0, 0.4)',
  subtitle_segment_border: '1px solid #363636',
  subtitle_segment_text: '#fff',
  clock_bg: '#edf6fe',
  clock_border: '2px solid transparent',
  clock_hands: '#a1a1a1',
  clock_focus: '#000',
  digit_selected: '#000',
  text_shadow: '2px 0 #edf6fe, -2px 0 #edf6fe, 0 2px #edf6fe, 0 -2px #edf6fe,' +
               '1px 1px #edf6fe, -1px -1px #edf6fe, 1px -1px #edf6fe, -1px 1px #edf6fe',
};

export const darkMode: Theme = {
  background: '#1C1C1C',
  menu_background: '#1C1C1C',
  text: 'rgba(255, 255, 255, 0.87)',
  text_black: '#fff',
  error: 'rgba(237, 23, 65, 0.8)',
  element_bg: '#2b2b2b',
  multiValue: '#4a4a4a',
  focused: '#a1a1a1',
  focus_text: '#000',
  selected: '#4a4a4a',
  disabled: 'rgba(255, 255, 255, 0.5)',
  menuBorder: '1px solid #5d5d5d',
  boxShadow: '0 0 5px rgba(255, 255, 255, 0.3)',
  boxShadow_tiles: '0 5px 10px 0px rgba(100, 100, 100, 0.3)',
  singleKey_bg: 'linear-gradient(180deg, rgba(40,40,40,1) 0%, rgba(30,30,30,1) 100%)',
  singleKey_border: '#404040',
  invert_wave: 'invert(100%)',
  inverted_text: '#000',
  tooltip: '#dddddd',
  tooltip_text: '#000',
  element_outline: '2px solid transparent',
  selected_text: '#fff',
  dropdown_border: '1px solid #ccc',
  menuButton_outline: '2px solid transparent',
  button_outline: '0px solid transparent',
  button_color: '#2b2b2b',
  indicator_color: '#ccc',
  icon_color: 'rgba(255, 255, 255, 0.87)',
  waveform_filter: 'invert(11%)',
  waveform_bg: '#fff',
  scrubber: '#fff',
  subtitle_segment_bg: 'rgba(0, 0, 0, 0.4)',
  subtitle_segment_border: '1px solid #dddddd',
  subtitle_segment_text: '#fff',
  clock_bg: '#2b2b2b',
  clock_border: '2px solid transparent',
  clock_hands: '#a1a1a1',
  clock_focus: '#fff',
  digit_selected: '#000',
  text_shadow: '2px 0 #2b2b2b, -2px 0 #2b2b2b, 0 2px #2b2b2b, 0 -2px #2b2b2b,' +
               ' 1px 1px #2b2b2b, -1px -1px #2b2b2b, 1px -1px #2b2b2b, -1px 1px #2b2b2b'
};

export const highContrastDarkMode: Theme = {
  background: '#000',
  menu_background: '#000',
  text: '#fff',
  text_black: '#fff',
  error: '#ED1741',
  element_bg: 'none',
  multiValue: '#c4c4c4',
  focused: '#a6ffea',
  focus_text: '#000',
  selected: '#fff',
  disabled: 'rgba(255, 255, 255, 0.6)',
  menuBorder: '2px solid #fff',
  boxShadow: '0 0 0 rgba(255, 255, 255, 0.3)',
  boxShadow_tiles: '0 0 0 rgba(255, 255, 255, 0.3)',
  singleKey_bg: 'none',
  singleKey_border: '#fff',
  invert_wave: 'invert(100%)',
  inverted_text: '#000',
  tooltip: '#fff',
  tooltip_text: '#000',
  element_outline: '2px solid #fff',
  selected_text: '#000',
  dropdown_border: '2px solid #fff',
  menuButton_outline: '2px solid transparent',
  button_outline: '2px solid #a6ffea',
  button_color: '#a6ffea',
  indicator_color: '#a6ffea',
  icon_color: '#a6ffea',
  waveform_filter: 'invert(100%)',
  waveform_bg: '#80B8AC',
  scrubber: '#fff',
  subtitle_segment_bg: 'none',
  subtitle_segment_border: '2px solid #fff',
  subtitle_segment_text: '#fff',
  clock_bg: '#000',
  clock_border: '2px solid #a6ffea',
  clock_hands: '#fff',
  clock_focus: '#000',
  digit_selected: '#000',
  text_shadow: '2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000,' +
               ' 1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000',
}

export const highContrastLightMode: Theme = {
  background: 'snow',
  menu_background: 'snow',
  text: '#000',
  text_black: '#000',
  error: '#a5102d',
  element_bg: 'none',
  multiValue: '#2e2e2e',
  focused: '#000099',
  focus_text: '#fff',
  selected: '#4646b5',
  disabled: 'rgba(0, 0, 0, 0.6)',
  menuBorder: '2px solid #000',
  boxShadow: '0 0 0 rgba(0, 0, 0, 0.3)',
  boxShadow_tiles: '0 0 0 rgba(0, 0, 0, 0.3)',
  singleKey_bg: 'none',
  singleKey_border: '#000',
  invert_wave: 'invert(0%)',
  inverted_text: '#000',
  tooltip: '#000',
  tooltip_text: '#fff',
  element_outline: '2px solid #000',
  selected_text: '#fff',
  dropdown_border: '2px solid #000',
  menuButton_outline: '2px solid transparent',
  button_outline: '3px solid #000099',
  button_color: '#000099',
  indicator_color: '#000099',
  icon_color: '#000099',
  waveform_filter: 'invert(0%)',
  waveform_bg: '#fff',
  scrubber: '#000',
  subtitle_segment_bg: 'none',
  subtitle_segment_border: '2px solid #000',
  subtitle_segment_text: '#000',
  clock_bg: 'snow',
  clock_border: '2px solid #000099',
  clock_hands: '#4646b5',
  clock_focus: '#fff',
  digit_selected: '#fff',
  text_shadow: '2px 0 snow, -2px 0 snow, 0 2px snow, 0 -2px snow,' +
               ' 1px 1px snow, -1px -1px snow, 1px -1px snow, -1px 1px snow',
}
