# Harvard HCI Reading Group

Welcome to the Harvard HCI Reading Group! This repository contains our weekly reading group's curated list of research papers, resources, and schedule.

This repository is set up as a website using Jekyll and GitHub Pages. You can browse the papers and find information about our reading schedule here.

## Adding new papers

To add a new paper to the reading group, follow these steps:

1. Fork and clone this repository.
2. Navigate to the `_data/schedule` directory.
3. Open the YAML file corresponding to the current semester (e.g., `fall-2025.yml`).
4. Add a new entry for the week with the date, title, readings, presenter, and any notes. For example:

```yaml
- date: "2025-09-15"
  title: "What is HCI?"
  readings:
    - title: "Some Foundational Paper on HCI"
      url: "https://example.com/hci-study"
    - title: "Another Important Read, but not as important"
      url: "https://example.com/ui-design"
      optional: true
    - title: "A Third Reading without URL"
  person: "Greg Heffley"
  note: "Don't forget to bring snacks!"
```

> [!IMPORTANT]
> Make sure to use proper YAML syntax and indentation. If you use a `:`, `"`, or other special characters in titles or notes, ensure they are properly escaped. The site will not build if there are syntax errors.

5. Commit your changes and push them to your forked repository.
6. Open a pull request to merge your changes into the main repository.
7. Once approved, the new paper will be added to the reading group's schedule.

## Adding new semesters

To add a new semester to the reading group schedule, follow these steps:

1. Create a new entry in `_data/schedule` with the file name `season-year.yml` (e.g., `fall-2025.yml`).
2. Add weeks with dates, titles, readings, presenters, and notes as needed.
3. Update the `site.meeting` variable in `_config.yml` to reflect the new semester's meeting time.
4. Commit and redeploy the site.

> [!NOTE]
> The site automatically detects the latest semester and orders past semesters based on the filenames in the `_data/schedule` directory. Make sure you follow the naming convention for proper detection.

## License

This repository is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
