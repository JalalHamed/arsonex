import { useThemeModeAtom } from '@/state';
import { breakpoints, darkPalette, lightPalette, shadows } from '@/styles';
import typography from '@/styles/theme/typography';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { FC, PropsWithChildren, useEffect, useMemo } from 'react';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

const StyleProvider: FC<PropsWithChildren> = ({ children }) => {
  const [themeMode] = useThemeModeAtom();

  const theme = useMemo(
    () =>
      createTheme({
        palette: themeMode === 'light' ? lightPalette : darkPalette,
        shadows,
        typography,
        breakpoints,
      }),
    [themeMode]
  );

  useEffect(() => {
    document.dir = 'rtl';
  }, []);

  return (
    <CacheProvider
      value={createCache({
        key: 'mui-style-rtl',
        stylisPlugins: [prefixer, rtlPlugin],
      })}
    >
      <ThemeProvider theme={{ ...theme, direction: 'rtl' }}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default StyleProvider;
