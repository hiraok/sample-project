import React from 'react';
import './Search.css';


class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            medias: null
        }

    }

    async requestTwitter() {
        const result = await client.get('search/tweets', {
            q: '上野動物園',
            result_type: 'mixed',
            include_entities: 'true'
        });

        const statuses = result.statuses;

        const mediaList = [];

        statuses.forEach((element) => {
            if (element.entities.media !== null) {
                const entity = element.entities;
                if (entity !== null) {
                    if (entity.media !== undefined) {
                        mediaList.push(entity.media)
                    }
                } else {
                    console.log("エラー")
                }
            } else {
                console.log("エラー")
            }
        });
        this.setState({medias: mediaList})
    }

    fetchList(list) {
        if (list == null) {
            return <p>画像はありません</p>
        }
        const mediaList = list.map((media, index) => {
            return (
                <li key={index}><img src={media[0].media_url} width={200}/></li>
            )
        });
        return <ul>{mediaList}</ul>
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