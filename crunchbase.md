# Crunchbase api

## Find uuid

ORGANIZATION_QUERY = "Google"
API_KEY = "1234567890ABCDEF"

curl -X 'GET' \
  'https://api.crunchbase.com/api/v4/autocompletes?query=${ORGANIZATION_QUERY}' \
  -H 'accept: application/json' \
  -H 'X-cb-user-key: API_KEY'

## Fetch api

https://api.crunchbase.com/api/v4/entities/organizations/google?card_ids=%5B%22acquiree_acquisitions%22%2C%22acquirer_acquisitions%22%2C%22child_organizations%22%2C%22child_ownerships%22%2C%22event_appearances%22%2C%22fields%22%2C%22founders%22%2C%22headquarters_address%22%2C%22investors%22%2C%22ipos%22%2C%22jobs%22%2C%22key_employee_changes%22%2C%22layoffs%22%2C%22parent_organization%22%2C%22parent_ownership%22%2C%22participated_funding_rounds%22%2C%22participated_funds%22%2C%22participated_investments%22%2C%22press_references%22%2C%22raised_funding_rounds%22%2C%22raised_funds%22%2C%22raised_investments%22%5D
