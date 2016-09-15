
## 1- Python helper Code
  <p>Using extensively Python Fiddle, it is not possible AFAIK to import BioPython. Moreover, the latter is a little bit too complex for biologists students with no programming skills.
  
  **Seq** class storing information (title and sequence data) from a FASTA sequence.

    ```python
    class Seq:
    def __init__(self, seqdata):
        _tmp = seqdata.split('\n')
        self.title = _tmp[0]
        self.data = ''.join(_tmp[1:]).strip()
        # Read title
        _tmp = self.title.split('-')
        self.author1 = _tmp[0]
        self.author2 = _tmp[2]
        self.copy    = int( _tmp[1])
        self.length  = len(self.data)
    
    def show(self):
        attrs = vars(self)
        print ', '.join("%s: %s" % item for item in attrs.items())
        
    def fasta(self):
        return '>{:s}-{:d}-{:s}\n{:s}'.format(self.author1,self.copy,self.author2,self.data)
    
    ```
    
