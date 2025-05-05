# AtCoder Analytics Extension

A cross-browser WebExtension that enhances your AtCoder experience with powerful analytics and visualizations. Built to work seamlessly on both Firefox and Chrome, and designed to be fully open-source.

## Motivation

I have a deep appreciation for AtCoder and the competitive programming community. I was inspired by tools like CF Analytics and AC Analytics; however, AC Analytics is not open-source and only supports Chromium-based browsers, making it inconvenient for Zen Browser users like me. This project aims to provide an open, extensible solution with full support for Firefox and Chrome.

## Roadmap (Future Enhancements)

1. **Beautiful Activity Stats**: Advanced time-series charts, heatmaps, and filter options.
2. **Clean but Multifunctional Problem Set**: Tag-based filtering, search enhancements, and stats overlays.
3. **Elegant Completed Problem List**: Exportable CSV/JSON, progress tracking widgets.
4. **AC/WA Status Indicators**: Customizable icons and color themes.
5. **Problem Difficulty Tags**: Rating-based color coding and percentile information.

## Installation & Development

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/atcoder-analytics.git
   cd atcoder-analytics
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run in development mode**:

   - Firefox:

     ```bash
     web-ext run --firefox
     ```

   - Chrome (or other Chromium-based browsers):

     ```bash
     web-ext run --chromium --chromium-binary "/path/to/chrome"
     ```

4. **Build for production**:

   ```bash
   npm run build
   ```

## Contributing

We welcome contributions from the community! To contribute:

1. Fork this repository.
2. Create a new branch for your feature or bugfix:

   ```bash
   git checkout -b feature/YourFeatureName
   ```

3. Make your changes and commit with clear messages:

   ```bash
   git commit -m "Add awesome feature"
   ```

4. Push to your fork:

   ```bash
   git push origin feature/YourFeatureName
   ```

5. Open a pull request describing your changes and the motivation behind them.

Please follow these guidelines:

- Ensure your code follows consistent style and formatting.
- Write clear, concise commit messages.
- Include tests or screenshots for UI changes when applicable.
- Update this README and any relevant documentation.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

Thank you for using and contributing to AtCoder Analytics Extension!
