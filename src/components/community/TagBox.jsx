/* eslint-disable react/display-name */
import React, {useState, useCallback, useEffect} from "react";
import styled from "styled-components";

const TagItem = React.memo(({ tag, onRemove }) => (
<Tag onClick={() => onRemove(tag)}>#{tag}</Tag>
));

const TagList = React.memo(({ tags, onRemove }) => (
    <TagListBlock>
        {tags.map(tag => (
            <TagItem key={tag} tag={tag} onRemove={onRemove}/>
        ))}
    </TagListBlock>
));

const TagBox = () => {
// useEffect 적용
// const TagBox = ({tags, onChangeTags}) => {
    const [input, setInput] = useState('');
    const [localTags, setLocalTags] = useState([]);

    const insertTag = useCallback(
        tag => {
            if (!tag) return;
            if (localTags.includes(tag)) return;
            setLocalTags([...localTags, tag]);
            // useEffect 사용 시 위의 코드 주석처리

            // const nextTags = [...localTags, tag];
            // setLocalTags(nextTags);
            // onChangeTags(nextTags);
        },
        [localTags],
        // useEffect 사용 시 위의 코드 주석처리

        // [localTags, onChangeTags],
    );

    const onRemove = useCallback(
        tag => {
            setLocalTags(localTags.filter(t => t !== tag));

            // const nextTags = localTags.filter(t => t !== tag);
            // setLocalTags(nextTags);
            // onChangeTags(nextTags);
        },
        [localTags],
        // [localTags, onChangeTags],
    );

    const onChange = useCallback(e => {
        setInput(e.target.value);
    }, []);

    const addTag = useCallback(
        e => {
            e.preventDefault();
            // preventDefault를 했는데 왜 계속 새로고침이 되어서 다 날아가지...?
            insertTag(input.trim());
            setInput('');
        },
        [input, insertTag],
    );

    // useEffect(() => {
    //     setLocalTags(tags);
    // }, [tags]);

    return (
    <TagBoxBlock>
        <TagForm >
            <input
            placeholder="태그를 입력하세요"
            value={input}
            onChange={onChange}
            />
            <button type="button" onClick={addTag}>추가</button>
        </TagForm>
        <TagList tags={localTags} onRemove={onRemove} />
    </TagBoxBlock>
  );
};

export default TagBox;

const TagBoxBlock = styled.div`
  width: calc(90% + 13px);
  height: 70px;
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
`

const TagForm = styled.form`
overflow: hidden;
display: flex;
width: 256px;
border: 1px solid gray;
border-radius: 5px;

input, button {
    outline: none;
    border: none;
    font-size: 1rem;
};

input {
    padding: 0.5rem;
    flex: 1;
    min-width: 0;
};

button {
    cursor: pointer;
    padding-right: 1rem;
    padding-left: 1rem;
    border: none;
    background: gray;
    color: white;
};
`

const Tag = styled.div`
margin: 1px 0.5rem;
color: gray;
cursor: pointer;
/* :hover {
    opacity: 0.5;
}; */
`

const TagListBlock = styled.div`
display: flex;
margin-top: 0.5rem;
color: gray;
`
