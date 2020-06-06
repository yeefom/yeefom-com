import { css } from '@emotion/core'
import { dark, light } from './colors'
import { bpMaxXS } from './breakpoints'

export default () => {
  return css`
    @media not print {
      sup.footnote-print-only {
        display: none !important;
      }
    }
    @media print {
      .littlefoot-footnote,
      .littlefoot-footnote__button {
        display: none !important;
      }
    }
    .littlefoot-footnote__button {
      color: ${light.footnoteButtonText};
      background-color: ${light.footnoteButtonBackground};
      border: 0;
      border-radius: .5em;
      cursor: pointer;
      display: inline-block;
      font-size: .9em;
      font-weight: bold;
      height: 1em;
      line-height: 1;
      margin: 0 .1em 0 .2em;
      min-width: 1.5em;
      padding: 0 .5em;
      position: relative;
      text-decoration: none;
      top: -0.1em;
      vertical-align: middle;
      z-index: 5;
    }
    .littlefoot-footnote__button.is-active {
      background-color: #6e6e6e;
      color: white;
    }
    .littlefoot-footnote__host {
      display: inline-block;
      position: relative;
      text-indent: 0;
      &:focus {
        outline: none;
      }
      button {
        font-weight: 500;
        padding: 0 6px;
        height: 1rem;
        &:focus {
          outline: none;
        }
      }
    }
    .littlefoot-footnote {
      border-radius: .5em;
      border: 1px solid #c3c3c3;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
      box-sizing: border-box;
      display: inline-block;
      left: 0;
      line-height: 0;
      margin: 2.01924em 0;
      max-width: 90%;
      opacity: 0;
      position: absolute;
      top: 0;
      z-index: 10;
      transform-origin: 50% 0;
      transform: scale(0.1) translateZ(0);
      transition-duration: 0.25s;
      transition-property: opacity, transform;
      transition-timing-function: ease;
    }
    .littlefoot-footnote.is-positioned-top {
      bottom: 0;
      top: auto;
    }
    .littlefoot-footnote.is-active {
      opacity: .97;
      transform: scale(1) translateZ(0);
    }
    .littlefoot-footnote__wrapper {
      overflow: hidden;
      position: relative;
      max-width: 100% !important;
      width: 22em;
      z-index: 14;
    }
    .littlefoot-footnote__content {
      background: ${light.footnotePopover};
      border-radius: .5em;
      line-height: normal;
      max-height: 15em;
      padding: .6em 1.4em;
      z-index: 8;
      font-size: 0.8rem;
      overflow: auto;
      &:focus {
        outline: none;
      }
    }
    .littlefoot-footnote__tooltip {
      background: ${light.footnotePopover};
      border-top-left-radius: 0;
      border: 1px solid #c3c3c3;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
      box-sizing: border-box;
      height: 1.3em;
      margin-left: -0.65em;
      position: absolute;
      transform: rotate(45deg);
      width: 1.3em;
      z-index: 12
    }
    .is-positioned-bottom .littlefoot-footnote__tooltip {
      top: -0.65em
    }
    .is-positioned-top .littlefoot-footnote__tooltip {
      bottom: -0.65em
    }
    ${bpMaxXS} {
      .littlefoot-footnote__wrapper {
        margin: 0;
        max-width: 100% !important;
        width: 10em;
      }
      .littlefoot-footnote__content {
        padding: 0.6rem;
      }
    }
    @media (prefers-color-scheme: dark) {
    .littlefoot-footnote__host {
        .littlefoot-footnote__content, .littlefoot-footnote__tooltip {
          background: ${dark.headerBg};
        }
      }
    }
  `
}
