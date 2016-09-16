
## 1- Python programming language

For biology students, I think learning a progrraming language is not a waste of time. However, there is many, many different languages [[Wiki](https://en.wikipedia.org/wiki/List_of_programming_languages)] and you have to choose a language with a good balance between criteria like ease of learning, wealth of tutorials and examples, large user community,etc. Nowadays, IMHO, two programming languages are fulfilling these criteria:
- Python 
- JavaScript and all the web technologies (HTML5 and CSS3)

> *Note**: If you need more sophisticated statistics functions, it is good to look at the "R" language. It is more complex but more powerful in this field.

### 1-1- The Basics: Variables, conditionals, and loops

#### 1-1-1 Variables
Variables are _"boxes"_ containing one value. This value may be a:
- Number (integer, floating-point numbers,etc.)
- Boolean (**True** of **False**)
- String (aka Text)
- List
- Dictionary
- Object

Variables names are case sensitive, cannot begin with a digit and you cannot use a reserved keyword used by Python (like **for**).

```python
myVar = 3
myVar = myVar + 1 # ← 4

0test = 5 # ← ERROR

```

#### 1-1-2 Conditionals

```python
if condition :
  instruction_1
  instruction_2
  instruction_3
elif other_condition:
  instruction_a
  instruction_b
else:
  instruction_01
  instruction_02
  instruction_03
  instruction_04
```
#### 1-1-3 Loops

```python
while exit_condition:
  instruction_1
  instruction_2
  instruction_3

```
For example, to display each character of the string 'python'

```python
lang = 'python'
i = 0
while i < len(lang):
  print(lang[i])
  i = i + 1
```
And the result is...
```python
p
y
t
h
o
n
```

### 1-2- Learning Python with web-based tool
[Python Fiddle](http://pythonfiddle.com/) is a good starting environment to write your first scripts.

### 1-3- Learning Python with IDLE


## 2- Python helper Code

Using extensively Python Fiddle, it is not possible AFAIK to import BioPython. Moreover, the latter is a little bit too complex for biology students with no programming skills.
  
  **Seq** class storing information (title and sequence data) from a FASTA sequence.

```python
class Seq:
    def __init__(self, seqdata):
        _tmp = seqdata.split('\n')
        self.description = _tmp[0][1:] if _tmp[0][0] == '>' else _tmp[0]
        self.data = ''.join(_tmp[1:]).strip()
        
        # Read title
        self.author1 = 'None'
        self.author2 = 'None'
        self.copy    = 0
        self.db      = 'None'
        self.id      = 'None'
        self.db2     = 'None'
        self.acc     = 'None'
        self.title   = 'None'

        # Try to read information within the description
        sep = '|'
        _tmp = self.description.split(sep)
        self.db = _tmp[0]
        if self.db == 'xzy':
            #CrazyBio header: xzy|first author|copynumber|second author
            self.author1 = _tmp[1]
            self.author2 = _tmp[3]
            self.copy    = int( _tmp[2])
            self.length  = len(self.data)
        elif self.db == 'gi':
            # gi|numéro gi|gb|numéro d'accession|locus
            self.id   = _tmp[1]
            self.db2  = _tmp[2]
            self.acc  = _tmp[3]
            self.title = _tmp[4]
        elif self.db == 'sp':
            # sp|numéro d'accession|nom
            self.db   = _tmp[0]
            self.acc  = _tmp[1]
            self.title = _tmp[2]

    def show(self):
        attrs = vars(self)
        return ', '.join("%s: %s" % item for item in attrs.items())
        
    def fasta(self):
        return '>{:s}\n{:s}'.format(self.description,self.data)

```
    
Usage

```python
fasta = """>sp|P68871|HBB_HUMAN Hemoglobin subunit beta OS=Homo sapiens GN=HBB PE=1 SV=2
MVHLTPEEKSAVTALWGKVNVDEVGGEALGRLLVVYPWTQRFFESFGDLSTPDAVMGNPK
VKAHGKKVLGAFSDGLAHLDNLKGTFATLSELHCDKLHVDPENFRLLGNVLVCVLAHHFG
KEFTPPVQAAYQKVVAGVANALAHKYH"""

seq = Seq(fasta)
print seq.acc # &larr; P68871
```

## 3- List of EMBOSS Tools

[EMBOSS](http://emboss.sourceforge.net/) &mdash; European Molecular Biology Open Software Suite &mdash; is a European package containing various bioinformatics programs available as web-based or as local tools.
The list of all the tools is available [here](http://emboss.sourceforge.net/apps/release/6.6/emboss/apps/) and grouped by categories [there](http://emboss.sourceforge.net/apps/release/6.6/emboss/apps/groups.html) and I created my own version combining both [there](http://crazybiocomputing.github.io/list_emboss.html) 

