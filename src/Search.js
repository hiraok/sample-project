import React from 'react';
import './Search.css';
import Twitter from 'twitter-lite';

require('dotenv').config();
const env = process.env;

const client = new Twitter({
    subdomain: env.SUB_DOMAIN,
    consumer_key: env.CONSUMER_KEY,
    consumer_secret: env.CONSUMER_KEY_SECRET,
    bearer_token: env.BEARER_TOKEN
});
console.log(env.BEARER_TOKEN);
class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            medias: []
        }
    }

    fetchList(list) {
        const mediaList = list.map((media, index) => {
            return (
                <li>
                    {media}
                </li>
            )
        });
        return <ul>{mediaList}</ul>
    }

    async requestTwitter() {
        const result = await client.get('search/tweets', {
            q: 'ニジマス',
            result_type: 'mixed',
            include_entities: 'true'
        });
        var statuses = result.statuses
        statuses.forEach((element, index) => {
            if (element.entities.media !== null) {
                var entitie = element.entities
                if (entitie !== null) {
                    if (entitie.media !== undefined) {
                        // eslint-disable-next-line no-undef
                        medias[index] = entitie.media
                        // eslint-disable-next-line no-undef
                        this.setState({medias: medias})
                    }
                } else {
                    console.log("エラー")
                }
            } else {
                console.log("エラー")
            }
        });
        // statuses.forEach((status) => {
        //     console.log(status.entities.media)
        // })
    }

    render() {
        return (
            <div className="Search-area">
                <textarea className="Text-area" rows="1" cols="100"></textarea>
                <button class="Button-style" type="button" onClick={() => this.requestTwitter()}>検索</button>
                {this.fetchList(this.state.medias)}
            </div>
        )
    }
}

export default Search;