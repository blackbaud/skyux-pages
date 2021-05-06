import { expect, SkyHostBrowser, SkyVisualThemeSelector } from '@skyux-sdk/e2e';

describe('Page Header', () => {
  let currentTheme = 'default';
  let currentThemeMode: string;

  function getScreenshotName(name: string): string {
    if (currentTheme) {
      name += '-' + currentTheme;
    }

    if (currentThemeMode) {
      name += '-' + currentThemeMode;
    }

    return name;
  }

  async function selectTheme(theme: string, mode: string): Promise<void> {
    currentTheme = theme;
    currentThemeMode = mode;

    return SkyVisualThemeSelector.selectTheme(theme, mode);
  }

  function validateAll() {
    it('should match previous page header no-link screenshot', async (done) => {
      await SkyHostBrowser.setWindowBreakpoint('lg');
      await SkyHostBrowser.scrollTo('#sky-page-header-no-link');

      expect('#sky-page-header-no-link').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('page-header-no-link')
      });
    });

    it('should match previous page header no-link screenshot (screen: xs)', async (done) => {
      await SkyHostBrowser.setWindowBreakpoint('xs');
      await SkyHostBrowser.scrollTo('#sky-page-header-no-link');

      expect('#sky-page-header-no-link').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('page-header-no-link-xs')
      });
    });

    it('should match previous page header short screenshot', async (done) => {
      await SkyHostBrowser.setWindowBreakpoint('lg');
      await SkyHostBrowser.scrollTo('#sky-page-header-short');

      expect('#sky-page-header-short').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('page-header-short')
      });
    });

    it('should match previous page header short screenshot (screen: xs)', async (done) => {
      await SkyHostBrowser.setWindowBreakpoint('xs');
      await SkyHostBrowser.scrollTo('#sky-page-header-short');

      expect('#sky-page-header-short').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('page-header-short-xs')
      });
    });

    it('should match previous page header long screenshot', async (done) => {
      await SkyHostBrowser.setWindowBreakpoint('lg');
      await SkyHostBrowser.scrollTo('#sky-page-header-long');

      expect('#sky-page-header-long').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('page-header-long')
      });
    });

    it('should match previous page header long screenshot (screen: xs)', async (done) => {
      await SkyHostBrowser.setWindowBreakpoint('xs');
      await SkyHostBrowser.scrollTo('#sky-page-header-long');

      expect('#sky-page-header-long').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('page-header-long-xs')
      });
    });
  }

  beforeEach(async () => {
    await SkyHostBrowser.get('visual/page-header');
  });

  validateAll();

  describe('when modern theme', () => {
    beforeEach(async () => {
      await selectTheme('modern', 'light');
    });

    validateAll();
  });

  describe('when modern theme in dark mode', () => {
    beforeEach(async () => {
      await selectTheme('modern', 'dark');
    });

    validateAll();
  });
});
