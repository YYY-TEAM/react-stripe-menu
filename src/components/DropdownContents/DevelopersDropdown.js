import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Icon from "./Icon"
import DropdownSection from "./DropdownSection"
import { Heading, HeadingLink } from "./Heading"
import LinkList from "./LinkList"

const DevelopersDropdownEl = styled.div`
  width: 25rem;
`

const Flex = styled.div`
  display: flex;
  > div:first-of-type {
    margin-right: 3.2rem;
  }
`

const DevelopersDropdown = () => {
  return (
    <DevelopersDropdownEl>
      <DropdownSection>
        <div>
          <Heading>Documentation</Heading>
          <p className="mb-0">Start integrating Stripe's products and tools</p>
          <Flex>
            <div>
              <h4>Get Started</h4>
              <LinkList>
                <li>
                  <a href="#">Elements</a>
                </li>
                <li>
                  <a href="#">Checkout</a>
                </li>
                <li>
                  <a href="#">Mobile apps</a>
                </li>
              </LinkList>
            </div>
            <div>
              <h4>Popular Topics</h4>
              <LinkList>
                <li>
                  <a href="#">Apple Pay</a>
                </li>
                <li>
                  <a href="#">Testing</a>
                </li>
                <li>
                  <a href="#">Launch Checklist</a>
                </li>
              </LinkList>
            </div>
          </Flex>
        </div>
      </DropdownSection>
      <DropdownSection>
        <ul>
          <HeadingLink>
            <a href="#">
              <Icon /> Full API Reference
            </a>
          </HeadingLink>
          <HeadingLink>
            <a href="#">
              <Icon /> API Status
            </a>
          </HeadingLink>
          <HeadingLink noMarginBottom>
            <a href="#">
              <Icon /> Open Source
            </a>
          </HeadingLink>
        </ul>
      </DropdownSection>
    </DevelopersDropdownEl>
  )
}

export default DevelopersDropdown