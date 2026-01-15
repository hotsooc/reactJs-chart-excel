import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
} from "react-router";
import { ConfigProvider, App as AntdApp } from "antd";
import viVN from "antd/locale/vi_VN";
import "antd/dist/reset.css";
import DefaultLayout from "./components/layouts/DefaultLayout";
import "./app.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ConfigProvider 
          locale={viVN}
          theme={{
            token: {
              colorPrimary: "#1677ff",
              borderRadius: 6,
            },
          }}
        >
          <AntdApp>
            {children}
          </AntdApp>
        </ConfigProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
}

export function ErrorBoundary({ error }: { error: unknown }) {
  let message = "Oops!";
  let details = "Đã xảy ra lỗi không xác định.";

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404 - Không tìm thấy trang" : "Lỗi hệ thống";
    details = error.statusText || details;
  } else if (error instanceof Error) {
    details = error.message;
  }

  return (
    <main style={{ padding: "20px", textAlign: "center" }}>
      <h1>{message}</h1>
      <p>{details}</p>
    </main>
  );
}