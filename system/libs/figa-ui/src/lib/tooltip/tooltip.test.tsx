import { render, fireEvent } from '@testing-library/react';
import { Tooltip } from './tooltip';

describe('Tooltip', () => {
    it('renders tooltip content when hovering', () => {
      const content = 'This is a tooltip content';
      const { getByText, getByTestId } = render(
        <Tooltip content={content}>
          <span data-testid="tooltip-trigger">Hover me</span>
        </Tooltip>
      );
  
      const tooltipTrigger = getByTestId('tooltip-trigger');
      const tooltipContent = getByText(content);
  
      fireEvent.mouseEnter(tooltipTrigger);
  
      expect(tooltipContent).toBeTruthy(); 
  
      fireEvent.mouseLeave(tooltipTrigger);
  
      expect(tooltipContent).toBeFalsy(); 
    });
  
    it('renders tooltip with custom class and direction', () => {
      const content = 'Custom Tooltip';
      const className = 'custom-tooltip';
      const direction = 'right';
      const { getByText, getByTestId } = render(
        <Tooltip content={content} className={className} direction={direction}>
          <span data-testid="tooltip-trigger">Hover me</span>
        </Tooltip>
      );
  
      const tooltipTrigger = getByTestId('tooltip-trigger');
      const tooltipContent = getByText(content);
  
      fireEvent.mouseEnter(tooltipTrigger);
  
      expect(tooltipContent).toBeTruthy(); 
  
      const tooltip = getByTestId('tooltip');
      expect(tooltip.classList.contains(className)).toBe(true); 
      expect(tooltip.classList.contains(direction)).toBe(true); 
  
      fireEvent.mouseLeave(tooltipTrigger);
  
      expect(tooltipContent).toBeFalsy(); 
    });
  });