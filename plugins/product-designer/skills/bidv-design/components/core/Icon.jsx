import React from 'react';

/**
 * Icon — thin wrapper around the Iconify <iconify-icon> web component,
 * pinned to Microsoft's Fluent UI System Icons set (`fluent:`), which is
 * the icon library BIDV Back Office is built on.
 *
 * Requires the Iconify script to be present on the page:
 *   <script src="https://cdn.jsdelivr.net/npm/iconify-icon@2/dist/iconify-icon.min.js"></script>
 *
 * Pass either a short name from the curated map below (e.g. "chevron-down")
 * or a full Iconify id (e.g. "fluent:edit-24-regular").
 */

export const ICONS = {
  'chevron-down': 'fluent:chevron-down-24-regular',
  'chevron-up': 'fluent:chevron-up-24-regular',
  'chevron-right': 'fluent:chevron-right-24-regular',
  'chevron-left': 'fluent:chevron-left-24-regular',
  dismiss: 'fluent:dismiss-24-regular',
  'dismiss-circle': 'fluent:dismiss-circle-24-regular',
  delete: 'fluent:delete-24-regular',
  checkmark: 'fluent:checkmark-24-regular',
  'checkmark-circle': 'fluent:checkmark-circle-24-filled',
  edit: 'fluent:edit-24-regular',
  save: 'fluent:save-24-regular',
  add: 'fluent:add-24-regular',
  download: 'fluent:arrow-download-24-regular',
  upload: 'fluent:arrow-upload-24-regular',
  filter: 'fluent:filter-24-regular',
  search: 'fluent:search-24-regular',
  info: 'fluent:info-24-regular',
  warning: 'fluent:warning-24-regular',
  error: 'fluent:error-circle-24-regular',
  calendar: 'fluent:calendar-ltr-24-regular',
  history: 'fluent:history-24-regular',
  person: 'fluent:person-24-regular',
  people: 'fluent:people-24-regular',
  options: 'fluent:options-24-regular',
  'more-horizontal': 'fluent:more-horizontal-24-regular',
  'more-vertical': 'fluent:more-vertical-24-regular',
  settings: 'fluent:settings-24-regular',
  home: 'fluent:home-24-regular',
  document: 'fluent:document-24-regular',
  'money': 'fluent:money-24-regular',
  'wallet': 'fluent:wallet-24-regular',
  'building-bank': 'fluent:building-bank-24-regular',
  'arrow-swap': 'fluent:arrow-swap-24-regular',
  'data-bar': 'fluent:data-histogram-24-regular',
  'sign-out': 'fluent:sign-out-24-regular',
  alert: 'fluent:alert-24-regular',
  grid: 'fluent:grid-24-regular',
  copy: 'fluent:copy-24-regular',
  eye: 'fluent:eye-24-regular',
  print: 'fluent:print-24-regular',
};

export function Icon({ name, size = 20, color, className = '', style = {}, ...rest }) {
  const icon = ICONS[name] || name;
  return React.createElement('iconify-icon', {
    icon,
    width: size,
    height: size,
    className,
    style: { color, display: 'inline-flex', flex: 'none', lineHeight: 0, ...style },
    ...rest,
  });
}
