import { expect, SkyHostBrowser, SkyVisualThemeSelector } from '@skyux-sdk/e2e';

describe('Action Hub', () => {
  let currentTheme = 'default';
  let currentThemeMode: string;

  async function selectTheme(theme: string, mode: string): Promise<void> {
    currentTheme = theme;
    currentThemeMode = mode;

    return SkyVisualThemeSelector.selectTheme(theme, mode);
  }

  function getScreenshotName(name: string): string {
    if (currentTheme) {
      name += '-' + currentTheme;
    }

    if (currentThemeMode) {
      name += '-' + currentThemeMode;
    }

    return name;
  }

  function validateAll() {
    it('should match previous needs attention screenshot', async (done) => {
      await SkyHostBrowser.setWindowBreakpoint('lg');
      await SkyHostBrowser.scrollTo('sky-needs-attention');

      expect('sky-needs-attention').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('needs-attention'),
      });
    });

    it('should match previous needs attention screenshot (screen: xs)', async (done) => {
      await SkyHostBrowser.setWindowBreakpoint('xs');
      await SkyHostBrowser.scrollTo('sky-needs-attention');

      expect('sky-needs-attention').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('needs-attention-xs'),
      });
    });

    it('should match previous links column screenshot', async (done) => {
      await SkyHostBrowser.setWindowBreakpoint('lg');
      await SkyHostBrowser.scrollTo('.sky-column-lg-3');

      expect('.sky-column-lg-3').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('links-column'),
      });
    });

    it('should match previous links column screenshot (screen: xs)', async (done) => {
      await SkyHostBrowser.setWindowBreakpoint('xs');
      await SkyHostBrowser.scrollTo('.sky-column-lg-3');

      expect('.sky-column-lg-3').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('links-column-xs'),
      });
    });
  }

  beforeEach(async () => {
    await SkyHostBrowser.get('visual/action-hub');
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
