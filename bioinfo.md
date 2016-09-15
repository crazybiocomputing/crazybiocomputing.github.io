
## 1- Python helper Code
  <p>Using extensively Python Fiddle, it is not possible AFAIK to import BioPython. Moreover, the latter is a little bit too complex for biology students with no programming skills.
  
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
seq = Seq(fasta)
print seq.data
```


