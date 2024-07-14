export class MonthDay {
  label: number;
  actual: boolean;
  inactive: boolean;

  private constructor(label: number, actual: boolean = false, inactive: boolean = false) {
    this.label = label;
    this.actual = actual;
    this.inactive = inactive;
  }

  public static withLabel(label: number): MonthDay {
    return new MonthDay(label, false, false);
  }

  public static actualWithLabel(label: number): MonthDay {
    return new MonthDay(label, true, false);
  }

  public static inactiveWithLabel(label: number): MonthDay {
    return new MonthDay(label, false, true);
  }
}
