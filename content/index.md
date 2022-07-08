# This is the preamble, and it is written in TOML format.
# In this section, you set information about the page, like title, description, and the template
# that should be used to render the content.

# REQUIRED

# The title of the document
title = "Plurigrid"

# OPTIONAL

# The description of the page.
description = "Systems for planetary scale energy market coordination. ⚡️🔌"

# The name of the template to use. `templates/` is automatically prepended, and `.hbs` is appended.
# So if you set this to `blog`, it becomes `templates/blog.hbs`.
# template = "

# These fields are user-definable. You can create whatever values you want
# here. The format must be `string` keys with `string` values, though.
[extra]
date = "Nov. 28, 1991"

# Anything after this line is considered Markdown content
---

This is an example home page written in _Markdown_.

You can find this text in `content/index.md`.
