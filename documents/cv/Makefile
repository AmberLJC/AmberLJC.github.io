# Makefile for LaTeX CV

# Main document name (without extension)
MAIN = main

# LaTeX compiler
LATEX = pdflatex

# Compiler flags
LATEXFLAGS = -interaction=nonstopmode -halt-on-error

# Output PDF
PDF = $(MAIN).pdf

# Auxiliary file extensions to clean
AUX_EXTS = aux log out toc lof lot bbl blg nav snm vrb fls fdb_latexmk synctex.gz

# Default target
all: $(PDF)

# Compile PDF
$(PDF): $(MAIN).tex
	$(LATEX) $(LATEXFLAGS) $(MAIN).tex

# Run twice for cross-references (if needed)
twice: $(MAIN).tex
	$(LATEX) $(LATEXFLAGS) $(MAIN).tex
	$(LATEX) $(LATEXFLAGS) $(MAIN).tex

# Clean auxiliary files
clean:
	rm -f $(foreach ext,$(AUX_EXTS),$(MAIN).$(ext))

# Clean everything including PDF
distclean: clean
	rm -f $(PDF)

# View PDF (macOS)
view: $(PDF)
	open $(PDF)

# Continuous compilation (requires latexmk)
watch:
	latexmk -pvc -pdf $(MAIN).tex

.PHONY: all clean distclean view watch twice
