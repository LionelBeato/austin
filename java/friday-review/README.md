# Friday Review - Friday 29, 2021

## Command-Line Arguments

Take a look at the following code:

```java
public static void main(String[]args){
        // code and stuff...
        // code and sutff...
        }
```

This is your _main method_ or _entry point_. This method should be familiar to you by now but have you ever wondered what `String[]args` is referring to? 

`String[]args` are your _command-line_ arguments. They are what are passed to your program in order to allow for some sort of dynamic setting or state. Consider the following:

```java
    public static void main(String[] args) {

        System.out.println(Arrays.toString(args));

        if (args[0].equals("dogs")) {
            System.out.println("Showing you pictures of dogs...");
        } else if (args[0].equals("cats")) {
            System.out.println("Showing you pictures of cats...");
        }


    }
```

If were to pass in the text value of `dogs` into my program as an argument, the code above will show me the text "Showing you pictures of dogs...". How is it doing this? `String[] args` is an array. This array can hold many arguments for your program but in the above example it only really is concerned with the very first argument (`args[0]`). The code does a check for the value of that index and responds dynamically to it. 

## `static` keyword

`static` is a keyword added to class properties that denotes that property is class-level implementation. 

## POJOs 

POJO stand for _Plain Ol' Java Object_. These describe classes with fields, a constructor, and getters and setters for most fields. 

## Abstract Classes and Methods

We utilize abstraction to minimize exposing implementation details to a user. We can do this on the class and method level as well via the  `abstract` keyword.

## Links

- [Baeldung: What is a Pojo Class?](https://www.baeldung.com/java-pojo-class)
- [Java Oracle Tutorial: Abstract Methods and Classes](https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html)

## Notes

### Overheard during the finanicial talk: 
- “EVERYTHING IS BULLSHIT,”
- “It’s like Tinkerbell - she has power, if you believe in her.”