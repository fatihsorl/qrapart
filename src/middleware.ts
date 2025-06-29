import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["tr", "en", "ru", "ar"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "tr",
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
