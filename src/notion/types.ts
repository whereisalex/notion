type MultiSelectProperty = {
  id: string;
  type: "multi_select";
  multi_select: any[];
};

type DateProperty = {
  id: string;
  type: "date";
  date: any | null;
};

type RichTextProperty = {
  id: string;
  type: "rich_text";
  rich_text: any[];
};

type CheckboxProperty = {
  id: string;
  type: "checkbox";
  checkbox: boolean;
};

type NumberProperty = {
  id: string;
  type: "number";
  number: any | null;
};

type SelectProperty = {
  id: string;
  type: "select";
  select: any | null;
};

type TitleProperty = {
  id: string;
  type: "title";
  title: any[];
};

type ReadingDBProps = {
  "My Rating": MultiSelectProperty;
  "Date Read": DateProperty;
  "Recommended by whom?": RichTextProperty;
  Type: MultiSelectProperty;
  Tags: MultiSelectProperty;
  "Date Added": DateProperty;
  "Do I possess this book?": CheckboxProperty;
  Location: RichTextProperty;
  Pages: NumberProperty;
  Status: SelectProperty;
  Binding: SelectProperty;
  Language: MultiSelectProperty;
  Author: RichTextProperty;
  Price: NumberProperty;
  "Original Publication Year": NumberProperty;
  Name: TitleProperty;
};
