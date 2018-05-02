import sys
import fake_rpi
import json

sys.modules['RPi'] = fake_rpi.RPi

import RPi.GPIO as GPIO


# "relay_pin": 23,
# "state_pin": 17,
# "state_pin_closed_value" : 0


class GarageController:
    def __init__(selectedGarageDoor):
        self.relay_pin = 23
        self.state_pin: 17
        self.state_pin_closed_value = 0

        GPIO.setup(self.relay_pin, GPIO.OUT)
        GPIO.setup(self.state_pin, GPIO.IN, pull_up_down=GPIO.PUD_UP)
        GPIO.output(self.relay_pin, True)
        print('this worked!')
        sys.stdout.flush()

    def get_state(self):
        return True
        # if GPIO.input(self.state_pin) == self.state_pin_closed_value:
        #     return True
        # else:
        #     return False

    def toggle_relay(self):
        state = self.get_state()

        GPIO.output(self.relay_pin, False)
        time.sleep(0.2)
        GPIO.output(self.relay_pin, True)

    if __name__ == '__main__':
        __init__()
