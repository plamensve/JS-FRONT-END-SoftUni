from seatable_api import Base, context
base = Base(context.api_token, context.server_url)
base.auth()