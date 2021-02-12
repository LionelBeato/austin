# Lambdas and Streams
_Feb 12, 2021_

_In the 1930s, a logician by the name of Alonzo Church conceptualized a **formal system** of logic known as **lambda calculus.** Using lambda calculus, one can express calculations based on function abstractions.<sup>[3]</sup>_

_Developers can now utilize a programming style that has been heavily inspired by lambda calculus in many languages. Since version 8, Java has enjoyed the benefits of functional programming as well._


```
(x) -> x 
```
>_A typical lambda expression. Since we're returning this function's argument, this lambda expression can be described as an [identify function](https://iep.utm.edu/lambda-calculi/#SH2a:~:text=%CE%BBx.x%3A%20this%20represents%20the%20identity%20function%2C%20which%20just%20returns%20its%20argument.)._

## Anonymous Inner Classes 

>Anonymous classes enable you to make your code more concise. They enable you to declare and instantiate a class at the same time. They are like local classes except that they do not have a name. Use them if you need to use a local class only once.<sup>[1]</sup>

Anonymous inner classes are considered _expressions_ and are thus never assigned a name like a typical class. Consider the following interface:

```java

public interface Danceable {
    void dance();
    void danceWithPerson(String personName); 
}
```

Utilizing this interface, we can implement a class _as an expression_ and assign it to a variable:

```java
public class Main {

    public static void main(String[] args) {
        Danceable getUpAnd = new Danceable() {
            
            String danceName = "the twist"; 
            
            void dance() {
                System.out.println("Doing " + danceName);
            }
            
            void danceWithSomebody(String danceWithSomebody){
                System.out.println("I am dancing with " + danceWithSomebody);
            }
            
        };
    }
}
```

## Lambdas and Functional Interface

We can maintain a level of conciseness with anonymous inner classes, but what if we only need to implement one method? If that's the case, the full expression can seem a little clunky. Enter _lambdas_.<sup>[2]</sup>


Java's implementation of lambdas and _anonymous functions_ may leave a lot to be desired for someone coming from other languages that natively support them. You cannot freely write the expression `() -> {}` anywhere in your code without utilizing a _functional interface_. Consider the following interface:

```java
@FunctionalInterface
public interface Danceable() {
    void dance();
}
```

Note that there's only _one defined method_. This permits us to add the annotation `@functionalInterface` above the interface definition--_doing so is not necessary but is considered good practice_. Ultimately, wherever we would implement an anonymous inner class, we can instead employ a lambda:

```java
Danceable danceTheTwist = () -> System.out.println("Did the twist!");
```

The above statement is considerably more concise than an anonymous inner class:

```java
Danceable danceTheTwist = new Danceable() {
    void dance() {
        System.out.println("Did the twist!"); 
    }
}
```
## Streams

## Links

- [A Tutorial Introduction to the Lambda Calculus](https://personal.utdallas.edu/~gupta/courses/apl/lambda.pdf)

## References

_Note: only viewable in raw markup_

[1]: https://docs.oracle.com/javase/tutorial/java/javaOO/anonymousclasses.html
[2]: https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html
[3]: https://www.baeldung.com/java-functional-programming