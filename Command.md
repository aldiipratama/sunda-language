## Command

Some command just like javascript, the only different is keyword and this language will translate to javascript and run as javascript. I know, this is just for fun.

### Variable

Assign variable

```
mastikeun foo teh "hello world"
// let foo = "hello world"

nyaan foo teh 123
// const foo = 123
```

Reassign variable

```
nu mana foo teh "hello world 2"
// foo = "hello world 2"
```

**Boolean**

```
mastikeun foo teh positip
// let foo = true

mastikeun foo teh pantes
// let foo = true

mastikeun foo teh negatip
// let foo = false

mastikeun foo teh teu pantes
// let foo = false
```

### Print / Console.log

```
tingalikeun "Hello world"
// console.log("Hello world")

tingalikeun foo
// console.log(foo)
```

### Condition

```
lamun foo teh "Hello world"
  tingalikeun "its hello world"
geusan

// transform to
if(foo == "Hello world"){
  console.log("its hello world")
}
```

```
lamun foo leuwih gede ti 3
  tingalikeun "its bigger than 3"
atawa lamun foo teh 3
  tingalikeun "foo is 3"
lamun henteu
  tingalikeun "its smaller than 3"
geusan

// transform to
if(foo > 3){
  console.log("its bigger than 3")
} else if (foo == 3) {
  console.log("foo is 3")
} else {
  console.log("its smaller than 3")
}
```

Comparison :

- `teh`: ' == ',
- `teu`: ' != ',
- `leuwih gede ti`: ' > ',
- `leuwih leutik ti`: ' < ',
- `sarua gede ti`: ' >= ',
- `sarua leutik ti`: ' <= '

### Loop

#### **`For` loop**:

```
ti i nepi 10
  lamun i leuwih gede ti 3
    tingalikeun "loop ka " + i
  geusan
geusan

// transform to
for (let i = 0; i < 10; i++) {
  if (i > 3){
    console.log("loop ka " + i);
  }
}
```

#### **`For of` loop**:

```
kabeh foo ti bar
  tingalikeun foo
geusan

// transform to
for (const foo of bar) {
  console.log(foo);
}
```

#### **`break`** and **`continue`**:

```
nepi dieu
// break;

sok we
// continue;
```

### Function

```
jadi ngeunaan my_story
    mastikeun umur teh 21
    tingalikeun "Umur maneh " + umur
sakitu we

jalankeun my_story

jadi ngeunaan fungsi_param_banyak a b c
    tingalikeun "a: " + a
    tingalikeun "b: " + b
    tingalikeun "c: " + c
sakitu we

jalankeun fungsi_param_banyak 3 4 5
```

### Async Function

```
ngemutan my_story
    mastikeun umur teh 21
    tingalikeun "Umur maneh " + umur
sakitu we

jalankeun my_story

jadi ngeunaan fungsi_param_banyak a b c
    tingalikeun "a: " + a
    tingalikeun "b: " + b
    tingalikeun "c: " + c
sakitu we

jalankeun fungsi_param_banyak 3 4 5
```

### Try Catch & Exception

```
teu percaya
  tingalikeun "Something wrong"
  kumaha atuh "Error message"
kacida
  tingalikeun "Catch error"
baelah
  tingalikeun "finish finally"
geusan


// transform to
try {
  console.log("Something wrong");
  throw new Error("Error message");
} catch {
  console.log("Catch error");
} finally {
  console.log("finish finally");
}
```
