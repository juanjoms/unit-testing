import { Utility } from "./classes";

describe('Testing Utility Class', () => {

  it('should find the largest number in an array', () => {
    const utility = new Utility();
    const result = utility.findMax([5, 3, 1, 6, 3]);
    expect(result).toBe(6);
  });

  it('should sort an array', () => {
    const utility = new Utility();
    const result = utility.sortArray([5, 3, 1, 6, 3]);
    expect(result).toEqual([1, 3, 3, 5, 6]);
  });

  it('should navigate to a different page', () => {
    const utility = new Utility();

    const spy = spyOn(history, 'pushState');
    utility.navigateTo('/about');
    expect(spy).toHaveBeenCalled();
  });
});
