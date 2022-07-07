//WELCOME TO JAVASCRIPT .. New Learning Same Concept


//UC1-Employee Present or Absent
{
    const IS_ABSENT=0
    let empCheck=Math.floor(Math.random()*10)%2;
    if(empCheck==IS_ABSENT)
    {
        console.log("UC1 - Employee is ABSENT. Exiting the Program");
    }else{
        console.log("UC1 - Employee is PRESENT");
    }
}

//UC2-Employee Wage
{
    const IS_PART_TIME=1;
    const IS_FULL_TIME=2;
    const PART_TIME_HOURS=4;
    const FULL_TIME_HOURS=8;
    const WAGE_PER_HOUR=20;
    
    let empHrs=0;
    let empCheck=Math.floor(Math.random()*10)%3;
    switch(empCheck)
    {
        case IS_PART_TIME:
            empHrs=PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            empHrs=FULL_TIME_HOURS;
            break;
        default :
             empHrs=0;
    }

    let empWage=empHrs*WAGE_PER_HOUR;
    console.log("UC2 - Emp Wage:"+empWage);
}

//UC3 - Functions
{
    const IS_PART_TIME=1;
    const IS_FULL_TIME=2;
    const PART_TIME_HOURS=4;
    const FULL_TIME_HOURS=8;
    const WAGE_PER_HOUR=20;
    
    function getWorkingHours(empCheck){
        switch(empCheck)
        {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default :
             return 0;
        }
    }

    let empCheck=Math.floor(Math.random()*10)%3;
    let empHrs=getWorkingHours(empCheck);
    let empWage=empHrs*WAGE_PER_HOUR;
    console.log("Emp Hrs:"+empHrs+"Emp Wage:"+empWage);
}