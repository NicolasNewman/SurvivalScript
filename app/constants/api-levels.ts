export const LevelList: Array<string> = [
    `
    \n## Bot ID #654678 IE. Name: 'Qwerty' 
    \nCreated by Central Command: Exploration and Resource Exploitation
    \n**Equipped with: ** 
    \n 1. Automatic Satellite Visual = Online
    \n**Task:** set coordinates to reestablish and maintain lock 
    \n 2. Laser Mining Drill = Offline 
    \n 3. Matter Scrambling Assembler = Offline 
    \n**Central Command: **
    \nWelcome to Central Command, this is the Command List, or CL where all programming information can be found  
    \n**ERROR:** Missing memory files, manual initialization of satalite is required through terminal 
    \nTo begin initialization type 'init' into terminal and press run
    
    `,
    `
    \n# Basics 1 
    \n**WARNING:** All standardized bots are required to communicate through the following methods, use of any code outside of convention will lead to deactivation 
    \n## Operators 
    \nOperators are symbols that can interact with variables 
    \n= 
    \nx=5 
    \n**Def:** = used to assign a variable a value, the value of x is now 5 
    \n== 
    \nx == 5 
    \n**Def:** == used to compare the value of two variables returning true or false, x does equal 5 and therefore this is true 
    
    \nValues using these operators are controlled, maintained and updated by the Central Command, tampering with such values will lead to deactivation 
    
    \n+ 
    \nx = 5+5 
    \n**Def:** + used to add two numbers 
    
    \n- 
    \nx = 10-5 
    \n**Def:** - used to subtract two numbers 
    
    \n* 
    \nx = 5*5 
    \n**Def:** * used to multiply two numbers together 
    
    \n/ 
    \nx = 10/5 
    \n**Def:** / used to divide two numbers 
    
    \n##Variables: 
    \nVariables are names assigned to different types of data 
    \nrobotName = “Qwerty” 
    \n**Def:** variable above is type **string** with the identity of the text inside quoutes 
    \n🔏 robotHealth = 1 
    \n🔏 robotBatteryLife = 100 
    \n**Def:** variables above are type **integer** which take on a whole number value
    \n**WARNING:** Bot: Qwerty is currently at critical health 
    \nsatVideoX = 5.395673954 
    \nsatVideoY = 12.486509372 
    \nrobotX = 5.000000000 
    \nrobotY = 12.000000000 
    \n**Def:** variables above are type **double** which take on numbers with decimal places 
    \nrobotDrive = 'False'
    \n**Def:** the variable above is type **boolean** which takes on the the value of either 'True' or 'False'

    \narray = [entry1,entry2, …] 
    \nsatVideoCordinates = [satVideoX, satVideoY] 
    \nrobotCordinates = [robotX, robotY] 
    \n**Def:** An **array**, an organizational tool for saving multiple, often related, data points 
    \nTo alter a list either redefine the variables in the list then redefine the list again or input listName.varibleWithinListName[newValue] to change the value of an individual point within a list 
    \n##Functions
    \nFunctions are how bots communicate with Central Command to perform tasks
    \nprint(“printed material”)
	\n**Def:** function print() prints the information within the paranthesis
    `,
    `
    # Level 1.2 
    \n ##Control Structures:
    \nIf(): 
    \nX=5
    \nIf(X == 5) { 
    \nPrint(“True”)
    \n}
    \nElse{
    \nPrint(”False”)
    \n}
	\nDef. An If statement is a conditional and will run or not run a certain code contained within itself depending on the validity of the condition
    \n
    \nFor():
    \nFor(i = 0; i<5; i++){
    \nPrint(“All Hail Central Command”)
    \n} 
	\nDef. A For loop completes an action for as long as a statement is true; the example above will print All Hail Central Command 5 times, when i is 0, 1, 2, 3, and 4, but not when i=5
	\nNote: Varibles can be updated citing themselves in addition to a modifier, this statement(i++) will increases i by one each time the loop is run
    \n
    \nWhile():
    \nIf (fileName == corrupted){
    \nWhile(fileName=corrupted) {
    \nclean(fileName)
    \n}
    \n}
    \nDef. A While loop contains a repetitive action that is continued until the criteria is no longer met
    \nWARNING: The Central Command does not recommend cleaning files by the above method, results may vary
    `,
    `
    \n# Level 1.3 
    \n## Heading 2
    \nCentral Command Values Efficiency above all else the following has been shown to increase a bots movement speed drastically
    \n##Control Structures:
    \nFunctions
    \nfunction moveLeft(){
    \nif(leftButtonDown == True){
    \nrobotX=robotX+ 1
    \n}
    \n} 
    \nAs a diagnostic of your gathered intelligence recode your drive train for all four cardinal directions and begin moving 

    `,
    `
    \n# Level 2 

    \n**Code Green:**
    \nPlease Upload(security clearance) to access
    `,
    `
    \n# Level 3 

    \n**Code Yellow:**
    \nPlease Upload(security clearance) to access 
    `,
    `
    \n# Level 4 
    \n**Code Red:**
    \nPlease Upload(security clearance) to access
    `,
    `
    \n# Level 5 
    \n**_Top Secret: Classified_**
    \nACCESS DENIED
    `
];
