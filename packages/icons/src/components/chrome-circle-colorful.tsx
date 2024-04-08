// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/chrome-circle-colorful.svg';

/**![ChromeCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9Ijc0Ljk1NTQxNDUlIiB5MT0iOTUuODM1NzMlIiB4Mj0iMTkuNzkwMzYyNiUiIHkyPSItNC4xNjgyODk0JSIgaWQ9ImFudC13ZWIzLWljb24tY2hyb21lLWNpcmNsZS1jb2xvcmZ1bC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzFFOEUzRSIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzRBODUzIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMjEuMjkzMzU0OSUiIHkxPSIxMDAuMTc2NzMzJSIgeDI9IjU5Ljc4NjgyMjYlIiB5Mj0iMC4xODA5NjY1NTElIiBpZD0iYW50LXdlYjMtaWNvbi1jaHJvbWUtY2lyY2xlLWNvbG9yZnVsLTIiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkNDOTM0IiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGQkJDMDQiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSIxLjgzMzA3Nzc0ZS0wNSUiIHkxPSI0OS45OTk4NzMlIiB4Mj0iMTAwJSIgeTI9IjQ5Ljk5OTg3MyUiIGlkPSJhbnQtd2ViMy1pY29uLWNocm9tZS1jaXJjbGUtY29sb3JmdWwtMyI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNEOTMwMjUiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0VBNDMzNSIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNDIzLjAwMDAwMCwgLTUxNzguMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQyMy4wMDAwMDAsIDUxNzguMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNTEyLjAwNzMxMSw3NjcuOTg5ODI3IEM2NTMuMzk4OTYyLDc2Ny45ODk4MjcgNzY4LjAxOTA5NCw2NTMuMzY4MjQgNzY4LjAxOTA5NCw1MTEuOTc0Nzk1IEM3NjguMDE5MDk0LDM3MC41ODEzNTEgNjUzLjM5ODk2MiwyNTUuOTU5NzY0IDUxMi4wMDczMTEsMjU1Ljk1OTc2NCBDMzcwLjYxNTY2MSwyNTUuOTU5NzY0IDI1NS45OTU1MjgsMzcwLjU4MTM1MSAyNTUuOTk1NTI4LDUxMS45NzQ3OTUgQzI1NS45OTU1MjgsNjUzLjM2ODI0IDM3MC42MTU2NjEsNzY3Ljk4OTgyNyA1MTIuMDA3MzExLDc2Ny45ODk4MjcgWiIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTI5MC4yOTQ2MDUsNjQwLjAzOTIwMyBMNjguNjE3MzM0MywyNTYuMDc4NDI1IEMyMy42Njg2NTQ3LDMzMy45MDY5OTUgMCw0MjIuMTk4ODU4IDAsNTEyLjA3NTU3NiBDMCw2MDEuOTUyMjk0IDIzLjY1NjQ2MzcsNjkwLjI0NTc4MyA2OC41OTk2MTY3LDc2OC4wNzc2MDMgQzExMy41NDI5MzIsODQ1LjkwOTQyNCAxNzguMTg1ODI2LDkxMC41MzczNyAyNTYuMDI4MDM3LDk1NS40NjI3MjUgQzMzMy44NzAyNDksMTAwMC4zODY0NiA0MjIuMTY3NDk0LDEwMjQuMDI0MzYgNTEyLjA0MzA3MSwxMDI0IEw3MzMuNzIwMDE3LDY0MC4wMzkyMDMgTDczMy43MjAwMTcsNjM5Ljk3MjU1OCBDNzExLjI2NzM3Nyw2NzguOTA5NiA2NzguOTU3ODc4LDcxMS4yNDcxNDMgNjQwLjA0MDgzNiw3MzMuNzMyNTc3IEM2MDEuMTIzNzk0LDc1Ni4yMTgwMTIgNTU2Ljk3MjczMyw3NjguMDU5NzIzIDUxMi4wMjY4MTcsNzY4LjA2NjIyNSBDNDY3LjA4MDksNzY4LjA3MjcyNyA0MjIuOTI0OTYzLDc1Ni4yNDU2NDUgMzg0LjAwMTQyLDczMy43Njk5NjMgQzM0NS4wNzk1MDEsNzExLjI5NTkwNyAzMTIuNzU4NjIzLDY3OC45NjgxMTcgMjkwLjI5NDYwNSw2NDAuMDM5MjAzIFoiIGZpbGw9InVybCgjYW50LXdlYjMtaWNvbi1jaHJvbWUtY2lyY2xlLWNvbG9yZnVsLTEpIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNzMzLjcwMzc2Miw2NDAuMDIyOTQ4IEw1MTIuMDI4NDQyLDEwMjMuOTgzNzMgQzYwMS45MDQwMiwxMDIzLjk5NjczIDY5MC4xOTgwMTQsMTAwMC4zNDU4MiA3NjguMDMzNzIzLDk1NS40MDkwODQgQzg0NS44Njk0MzMsOTEwLjQ3Mzk3NiA5MTAuNTAzMDYyLDg0NS44Mzc5MDIgOTU1LjQzNTk3NCw3NjcuOTk5NTc5IEMxMDAwLjM2NzI2LDY5MC4xNTk2MzIgMTAyNC4wMTQ2Miw2MDEuODYyODkyIDEwMjQsNTExLjk4NjE3NCBDMTAyMy45ODM3NCw0MjIuMTA5NDU2IDEwMDAuMzA1NDksMzMzLjgyMjQ2OSA5NTUuMzQ0OTQ4LDI1NS45OTg3NzYgTDUxMS45OTEwNTYsMjU1Ljk5ODc3NiBMNTExLjkzNTc5LDI1Ni4wMzI5MTEgQzU1Ni44ODE3MDcsMjU2LjAxMDE1NSA2MDEuMDQwODk1LDI2Ny44MjQyMzIgNjM5Ljk3MjU2NiwyOTAuMjgzNjU5IEM2NzguOTA0MjM3LDMxMi43NDQ3MTEgNzExLjIzNDg2OCwzNDUuMDU5NDk3IDczMy43MTM1MTUsMzgzLjk4MTkwOSBDNzU2LjE5MjE2Miw0MjIuOTAyNjk2IDc2OC4wMjU1OTYsNDY3LjA1NzU2OCA3NjguMDI1NTk2LDUxMi4wMDI0MjkgQzc2OC4wMjM5NzEsNTU2Ljk0ODkxNSA3NTYuMTg3Mjg2LDYwMS4xMDIxNjIgNzMzLjcwNzAxMyw2NDAuMDIyOTQ4IEw3MzMuNzAzNzYyLDY0MC4wMjI5NDggWiIgZmlsbD0idXJsKCNhbnQtd2ViMy1pY29uLWNocm9tZS1jaXJjbGUtY29sb3JmdWwtMikiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01MTIuMDA3MzExLDcxNC43MDk0NDEgQzYyMy45NDIxNjUsNzE0LjcwOTQ0MSA3MTQuNjg0MTE5LDYyMy45NjYzMzYgNzE0LjY4NDExOSw1MTIuMDMwMDYyIEM3MTQuNjg0MTE5LDQwMC4wOTM3ODkgNjIzLjk0MjE2NSwzMDkuMzUwNjgzIDUxMi4wMDczMTEsMzA5LjM1MDY4MyBDNDAwLjA3MjQ1OCwzMDkuMzUwNjgzIDMwOS4zMzIxMjksNDAwLjA5Mzc4OSAzMDkuMzMyMTI5LDUxMi4wMzAwNjIgQzMwOS4zMzIxMjksNjIzLjk2NjMzNiA0MDAuMDcyNDU4LDcxNC43MDk0NDEgNTEyLjAwNzMxMSw3MTQuNzA5NDQxIFoiIGZpbGw9IiMxQTczRTgiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01MTIuMDA4OTM3LDI1Ni4wMTUwMzEgTDk1NS4zNjI4MjgsMjU2LjAxNTAzMSBDOTEwLjQzNDc5MiwxNzguMTczNDU4IDg0NS44MDYwMzksMTEzLjUzMjAxOSA3NjcuOTczNTgxLDY4LjU5MTA1OTUgQzY5MC4xNDExMjIsMjMuNjUwMjYyMiA2MDEuODQ3MTI5LDAgNTExLjk3MTU1MSwwIEM0MjIuMDk1OTczLDAgMzMzLjgwNjg1NSwyMy42NzU0NTczIDI1NS45ODA4OTksNjguNjI3NDcwNSBDMTc4LjE1MzMxNywxMTMuNTc5MzIxIDExMy41MzQxNTUsMTc4LjIzMDM1IDY4LjYxODMwOTYsMjU2LjA3NjggTDI5MC4yOTQ2MDUsNjQwLjAzNzU3OCBMMjkwLjM1MTQ5Nyw2NDAuMDY4NDYyIEMyNjcuODU5ODQ2LDYwMS4xNTQxNzcgMjU2LjAxMDE1Nyw1NTcuMDA1ODA4IDI1NS45OTU1MjgsNTEyLjA1OTMyMSBDMjU1Ljk4MDg5OSw0NjcuMTEyODM1IDI2Ny44MDI5NTQsNDIyLjk1NDcxMiAyOTAuMjcwMjIzLDM4NC4wMjc0MjMgQzMxMi43MzU4NjYsMzQ1LjEwMDEzNCAzNDUuMDU4MzcsMzEyLjc3Mzk3IDM4My45ODE5MTQsMjkwLjMwMzE2NSBDNDIyLjkwNzA4MywyNjcuODMwNzM0IDQ2Ny4wNjMwMiwyNTYuMDA1Mjc4IDUxMi4wMDg5MzcsMjU2LjAxNTAzMSBaIiBmaWxsPSJ1cmwoI2FudC13ZWIzLWljb24tY2hyb21lLWNpcmNsZS1jb2xvcmZ1bC0zKSI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K) */
export const ChromeCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-chrome-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

ChromeCircleColorful.displayName = 'ChromeCircleColorful';
