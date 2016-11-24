# verki
Author's tool

## Feature List

### UI

1. Cross-platform (Desktop, Mobile)
1. Author writes in Markdown
1. Author can preview
1. Outline approach (not folders / pages)
  1. Manuscript
  1. Research / Notebook

### Infrastructure

1. Author saves to GitHub or BitBucket
1. Filenames are UUID v4 to avoid collaboration clobber
1. Directory ends in ".verkaĵo" so "sample.verkaĵo"
1. Project Configuration: "sample.verki-project"
1. User Customization: "sample.verki-workspace"

### Outputs

1. Compiles into ePub
2. Compiles into Mobi
3. Compiles into PDF (6x9)
4. Compiles into RTF

## Technical

### Testing

1. BDD via [Mocha](https://mochajs.org/)
2. Continuous Integration

### Gherkin

Example

```
Feature: Some terse yet descriptive text of what is desired
  In order to realize a named business value
  As an explicit system actor
  I want to gain some beneficial outcome which furthers the goal

  Scenario: Some determinable business situation
    Given some precondition
      And some other precondition
     When some action by the actor
      And some other action
      And yet another action
     Then some testable outcome is achieved
      And something else we can check happens too
```
