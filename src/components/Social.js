import React from 'react'
import { css } from '@emotion/core'
import i18n from '../i18n'

export const Twitter = ({ target }) => {
  return (
    <a
      href={target}
      aria-label={i18n.twitterAria}
      css={css`
        display: inline-block;
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="27"
        viewBox="0 0 23 23"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z"
        />
      </svg>
    </a>
  )
}

export const GitHub = ({ target }) => {
  return (
    <a
      href={target}
      aria-label={i18n.githubAria}
    >
      <svg
        css={css`
          display: inline-block;
        `}
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 23 23"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8"
        />
      </svg>
    </a>
  )
}

export const Email = ({ target }) => {
  return (
    <a
      href={target}
      aria-label={i18n.emailAria}
      css={css`
        display: inline-block;
        transform: translateY(2px);
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="29"
        viewBox="0 0 23 23"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"
        />
      </svg>
    </a>
  )
}

export const Feed = ({ target }) => {
  return (
    <a
      href={target}
      aria-label={i18n.feedAria}
      css={css`
        display: inline-block;
        transform: translateY(-3px);
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 23 23"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12.8 16C12.8 8.978 7.022 3.2 0 3.2V0c8.777 0 16 7.223 16 16h-3.2zM2.194 11.61c1.21 0 2.195.985 2.195 2.196 0 1.21-.99 2.194-2.2 2.194C.98 16 0 15.017 0 13.806c0-1.21.983-2.195 2.194-2.195zM10.606 16h-3.11c0-4.113-3.383-7.497-7.496-7.497v-3.11c5.818 0 10.606 4.79 10.606 10.607z"
        />
      </svg>
    </a>
  )
}
