from playwright.sync_api import sync_playwright

def test_scroll_header():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto('http://localhost:8000')

        # Check initial state
        header = page.locator('#header')
        class_name = header.get_attribute('class')
        print(f"Initial header classes: {class_name}")
        assert 'scrolled' not in (class_name or '')

        # Give it a bit to load and init AOS
        page.wait_for_timeout(500)

        # Scroll down
        page.evaluate('window.scrollTo(0, 100)')

        # Manually dispatch scroll event
        page.evaluate('window.dispatchEvent(new Event("scroll"));')

        # Wait for the event listener to process
        page.wait_for_timeout(500)

        class_name = header.get_attribute('class')
        print(f"Header classes after scrolling down: {class_name}")
        assert 'scrolled' in (class_name or '')

        # Scroll back up
        page.evaluate('window.scrollTo(0, 0)')

        # Manually dispatch scroll event
        page.evaluate('window.dispatchEvent(new Event("scroll"));')

        # Wait for the event listener to process
        page.wait_for_timeout(500)

        class_name = header.get_attribute('class')
        print(f"Header classes after scrolling up: {class_name}")
        assert 'scrolled' not in (class_name or '')

        browser.close()
        print("Test passed successfully!")

if __name__ == '__main__':
    test_scroll_header()