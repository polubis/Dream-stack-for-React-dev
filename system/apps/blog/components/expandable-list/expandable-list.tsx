import React, { useState } from 'react';
import data from './data.json';
import { SubList, Wrapper } from './expandable-list.style';

function ExpandableList() {
  const [openStates, setOpenStates] = useState(data.map(() => true));

  const handleClick = (index: number) => {
    const updatedOpenStates = [...openStates];
    updatedOpenStates[index] = !updatedOpenStates[index];
    setOpenStates(updatedOpenStates);
  };
  return (
    <Wrapper>
      <span>Chapters & lessons</span>
      <ul>
        {data.map((item, index) => (
          <div key={index}>
            <li onClick={() => handleClick(index)}>
              <div>
                <span>{item.title}</span>
                <p>{item.readTime}</p>
              </div>
              <button>
                <span
                  style={{
                    transform: openStates[index]
                      ? 'rotate(-90deg)'
                      : 'rotate(90deg)',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </button>
            </li>
            {item.articles.map((articles, subIndex) => (
              <SubList
                key={subIndex}
                style={{ display: openStates[index] ? 'flex' : 'none' }}
              >
                <li>
                  <a>
                    <p>{articles.articleTitle}</p>
                    <p>{articles.time}</p>
                  </a>
                </li>
              </SubList>
            ))}
          </div>
        ))}
      </ul>
    </Wrapper>
  );
}

export default ExpandableList;
