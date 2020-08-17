## 2. Design Pattern

```
public interface Vehicle {
	int set_num_of_wheels();
	int set_num_of_passengers();
	boolean has_gas();
}
```

- I have used Factory design to solve this problem. The factory pattern wraps a constructor for different types of objects and returns instances of the objects via a simple API. It makes it easy to create different objects by exposing a simple API that return the specified object type.
