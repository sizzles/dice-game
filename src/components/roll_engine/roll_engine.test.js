import {RollEngine} from './index'

//Test a large number of calls / simulate this many games
//But to still make the relatively test quick - cover doing a few asserts in single test case

test('roll engine should have a good distribution', () => {
    let seed = 77; //So we get the same outcome every time and prevent flaky tests
    let rollEngine = new RollEngine(seed); 
  
    let results = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0}

    for (let i = 0; i < 100000; i++) {
        let result = rollEngine.GetRoll();
        expect(result).toBeGreaterThanOrEqual(1);
        expect(result).toBeLessThanOrEqual(6);

        results[result] = results[result] + 1;
    }

    //map the keys
    const resultValues = Object.values(results).sort();
    const bottom = resultValues[0];
    const top = resultValues[resultValues.length - 1];

    const difference = Math.abs(top - bottom);

    console.log(resultValues)
    console.log("Difference: " + difference);
    expect(difference).toBeLessThanOrEqual(top * 0.03);//less than 3% difference tolerated
  });
