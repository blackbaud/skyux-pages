import { expect, SkyHostBrowser, SkyVisualThemeSelector } from '@skyux-sdk/e2e';

describe('Hub and Spoke', () => {
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
    it('should match previous hub and spoke short screenshot', async (done) => {
      await SkyHostBrowser.setWindowBreakpoint('lg');
      await SkyHostBrowser.scrollTo('#sky-hub-and-spoke-short');

      expect('#sky-hub-and-spoke-short').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('hub-and-spoke-short')
      });
    });

    it('should match previous hub and spoke short screenshot (screen: xs)', async (done) => {
      await SkyHostBrowser.setWindowBreakpoint('xs');
      await SkyHostBrowser.scrollTo('#sky-hub-and-spoke-short');

      expect('#sky-hub-and-spoke-short').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('hub-and-spoke-short-xs')
      });
    });

    it('should match previous hub and spoke long screenshot', async (done) => {
      await SkyHostBrowser.setWindowBreakpoint('lg');
      await SkyHostBrowser.scrollTo('#sky-hub-and-spoke-long');

      expect('#sky-hub-and-spoke-long').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('hub-and-spoke-long')
      });
    });

    it('should match previous hub and spoke long screenshot (screen: xs)', async (done) => {
      await SkyHostBrowser.setWindowBreakpoint('xs');
      await SkyHostBrowser.scrollTo('#sky-hub-and-spoke-long');

      expect('#sky-hub-and-spoke-long').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('hub-and-spoke-long-xs')
      });
    });
  }

  beforeEach(async () => {
    await SkyHostBrowser.get('visual/hub-and-spoke');
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
